import { prisma, Prisma } from '../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })

  if (session) {
    if (req.method === 'GET') {
      try {
        const user = await prisma.WuphfUser.findUnique({
          where: {
            email: session.user.email,
            // email: 'cpg55850@ucmo.edu',
          },
        })

        if (!user) {
          return res
            .status(404)
            .json({
              msg: `No WuphfUser found with the email ${session.user.email}`,
            })
        }
        res.json(user)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }

      // #error - the specified user does not exist
    }
    if (req.method === 'DELETE') {
      try {
        const user = await prisma.user.delete({
          where: {
            email: session.user.email,
          },
        })

        res.json(user)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error })
        throw error
      }
    }
  } else {
    res.status(401).json({ msg: 'User not authenticated' })
  }
  res.end()
}
