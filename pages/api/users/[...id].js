import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    if (id[1] == 'wuphf') {
      const wuphfs = await prisma.Wuphf.findMany({
        where: {
          userId: id[0],
        },
      })

      res.json(wuphfs)
    } else {
      const user = await prisma.WuphfUser.findUnique({
        where: {
          userName: id[0],
        },
        include: {
          wuphfs: true,
        },
      })

      res.json(user)
    }
  } else if (req.method === 'POST') {
    if (id[1] == 'follow') {
      // id[0] who we're following - /api/user/charles/follow
      // session.user.email
      // then find user with that email
      // grab id from that user - who we are
      let user = await prisma.WuphfUser.findUnique({
        where: {
          email: req.body.email, // our email
        },
      })
      const { userName } = user
      await prisma.Follower.create({
        data: {
          userId: id[0], //username to follow
          followerId: userName, //our username
        },
      })
      res.end(`Followed ${id[0]}`)
    }
  } else if (req.method === 'DELETE') {
    if (id[1] == 'follow') {
      let user = await prisma.WuphfUser.findUnique({
        where: {
          email: req.body.email, // our email
        },
      })
      const { userName } = user
      await prisma.Follower.delete({
        where: {
          userId_followerId: {
            userId: id[0], //username to follow
            followerId: userName, //our username
          },
        },
      })
      res.end(`Unfollowed ${id[0]}`)
    }
  }
}
