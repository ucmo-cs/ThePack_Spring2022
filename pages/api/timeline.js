import { prisma, Prisma } from '../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })

  //   if (session) {
  if (req.method === 'GET') {
    // Grab all user ids that the user follows
    // Add my id to that list
    // Get all wuphfs where userid in the list
    if (session) {
      const wuphfUser = await prisma.WuphfUser.findUnique({
        where: {
          email: session.user.email,
          // email: 'cpg55850@ucmo.edu',
        },
      })

      if (!wuphfUser) {
        return res.status(404).json({
          msg: `No WuphfUser found with the email ${session.user.email}`,
        })
      }

      try {
        // const users = await Prisma.Follower.FindMany({
        //   where: {
        //     followerId: wuphfUser.userName,
        //   },
        //   select: {
        //     userId,
        //   },
        // })

        // res.json(users)
        const wuphfUser = await prisma.WuphfUser.findUnique({
          where: {
            email: session.user.email,
            // email: 'cpg55850@ucmo.edu',
          },
        })

        if (!wuphfUser) {
          return res.status(404).json({
            msg: `No WuphfUser found with the email ${session.user.email}`,
          })
        }

        let users = await prisma.Follower.findMany({
          where: {
            followerId: wuphfUser.userName,
          },
          select: {
            userId: true,
          },
        })

        users = users.map((user) => user.userId)

        const usersWithMe = [...users, req.body.followerId]

        const timeline = await prisma.Wuphf.findMany({
          where: {
            userId: { in: usersWithMe },
          },
          orderBy: {
            createdAt: 'desc',
          },
        })

        res.json(timeline)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }
    } else {
      try {
        let users = await prisma.Follower.findMany({
          where: {
            followerId: req.body.followerId,
          },
          select: {
            userId: true,
          },
        })

        users = users.map((user) => user.userId)

        const usersWithMe = [...users, req.body.followerId]

        const timeline = await prisma.Wuphf.findMany({
          where: {
            userId: { in: usersWithMe },
          },
          orderBy: {
            createdAt: 'desc',
          },
        })

        res.json(timeline)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }
    }
  }
}
//    else {
//     res.status(401).json({ msg: 'User not authenticated' })
//   }
//   res.end()
// }
