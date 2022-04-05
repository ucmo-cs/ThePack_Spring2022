import { prisma, Prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    if (id[1] == 'wuphfs') {
      try {
        const wuphfs = await prisma.Wuphf.findMany({
          where: {
            userId: id[0],
          },
        })

        if (wuphfs.length === 0) {
          return res.status(404).json({ error: 'No Wuphfs by that user found' })
        }

        res.json(wuphfs)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }
    } else {
      try {
        const user = await prisma.WuphfUser.findUnique({
          where: {
            userName: id[0],
          },
          include: {
            wuphfs: true,
          },
        })

        if (!user) {
          return res.status(404).json({ error: 'No user found' })
        }

        res.json(user)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }
    }
  } else if (req.method === 'POST') {
    if (id[1] == 'follow') {
      // id[0] who we're following - /api/user/charles/follow
      // session.user.email
      // then find user with that email
      // grab id from that user - who we are
      let currentUser

      try {
        currentUser = await prisma.WuphfUser.findUnique({
          where: {
            email: req.body.email, // our email
          },
        })
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }

      const { userName } = currentUser

      // try to find the user we're following
      try {
        const userToFollow = await prisma.WuphfUser.findUnique({
          where: {
            userName: id[0],
          },
        })

        if (!userToFollow) {
          return res
            .status(404)
            .json({ error: 'The user you are trying to follow does not exist' })
        }
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }

      try {
        await prisma.Follower.create({
          data: {
            userId: id[0], //username to follow
            followerId: userName, //our username
          },
        })
        res.end(`Followed ${id[0]}`)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }

      // #validation
      // #authorization - who is allowed to do this?
    }
  } else if (req.method === 'PATCH') {
    try {
      const user = await prisma.WuphfUser.update({
        where: {
          userName: id[0],
        },
        data: {
          userName: req.body.userName || undefined,
          bio: req.body.bio || undefined,
        },
      })

      if (!user) {
        return res.status(404).json({ error: 'No user found' })
      }

      res.json(user)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }

    // #authorization - who is allowed to do this?
    // #validation - invalid input
  } else if (req.method === 'DELETE') {
    // return res.end(id[0])
    if (id[1] == null) {
      let wuphfUser = await prisma.WuphfUser.findUnique({
        where: {
          userName: id[0],
        },
      })

      if (!wuphfUser) {
        return res.status(404).json({ error: 'No user found' })
      }

      const { email } = wuphfUser

      try {
        user = await prisma.User.delete({
          where: {
            email,
          },
        })

        res.json(user)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }

      // #authorization - who is allowed to do this?
    }

    if (id[1] == 'follow') {
      let currentUser

      try {
        currentUser = await prisma.WuphfUser.findUnique({
          where: {
            email: req.body.email, // our email
          },
        })
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }

      const { userName } = currentUser

      // try to find the user we're following
      try {
        const userToFollow = await prisma.WuphfUser.findUnique({
          where: {
            userName: id[0],
          },
        })

        if (!userToFollow) {
          return res.status(404).json({
            error: 'The user you are trying to unfollow does not exist',
          })
        }
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }

      try {
        await prisma.Follower.delete({
          where: {
            userId_followerId: {
              userId: id[0], //username to follow
              followerId: userName, //our username
            },
          },
        })
        res.end(`Unfollowed ${id[0]}`)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }

      // #authorization - who is allowed to do this?
    }
  }
}
