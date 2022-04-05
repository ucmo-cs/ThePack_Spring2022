import { prisma, Prisma } from '../../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })

  if (req.method === 'GET') {
    try {
      const users = await prisma.WuphfUser.findMany()

      if (users.length === 0) {
        return res.status(404).json({ error: 'No users found' })
      }

      res.json(users)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }
  } else if (req.method === 'POST') {
    try {
      const user = await prisma.WuphfUser.create({
        data: {
          email: req.body.email,
          userName: req.body.userName,
          bio: req.body.bio || undefined,
        },
      })

      res.json(user)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2002') {
          return res
            .status(409)
            .json({ error: 'A user with that username already exists.' })
        }
      }
      console.error(error)
      res.status(500).json({ error })
      throw error
    }

    // #validation - invalid input
  } else if (req.method === 'DELETE') {
  }
}
