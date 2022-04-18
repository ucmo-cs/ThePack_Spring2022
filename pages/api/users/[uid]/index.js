import { prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
  const { uid } = req.query

  // /users/[uid]
  if (req.method === 'GET') {
    try {
      const user = await prisma.WuphfUser.findUnique({
        where: {
          userName: uid,
        },
        include: {
          wuphfs: true,
        },
      })

      if (!user) {
        return res
          .status(404)
          .json({ msg: `No WuphfUser found with the username ${uid}` })
      }

      res.json(user)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }
  } else if (req.method === 'PATCH') {
    try {
      const user = await prisma.WuphfUser.update({
        where: {
          userName: uid,
        },
        data: {
          userName: req.body.userName || undefined,
          bio: req.body.bio || undefined,
        },
      })

      if (!user) {
        return res.status(404).json({ msg: 'No WuphfUser found' })
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
    const wuphfUser = await prisma.WuphfUser.findUnique({
      where: {
        userName: uid,
      },
    })

    if (!wuphfUser) {
      return res.status(404).json({ msg: 'No WuphfUser found' })
    }

    const { email } = wuphfUser

    try {
      const user = await prisma.User.delete({
        where: {
          email: email,
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
}
