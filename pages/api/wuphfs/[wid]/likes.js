import { getSession } from 'next-auth/react'

import { prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
  const { wid } = req.query
  const session = await getSession({ req })

  const user = await prisma.WuphfUser.findUnique({
    where: {
      email: session.user.email,
    },
  })

  // /wuphfs/[wid]/likes
  if (req.method === 'GET') {
    try {
      const likes = await prisma.Likes.findMany({
        where: {
          wuphfId: Number(wid),
        },
      })

      if (likes.length === 0) {
        return res.status(404).json({ msg: 'No likes found' })
      }

      res.json(likes)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }
  } else if (req.method === 'POST') {
    try {
      const likes = await prisma.Likes.create({
        data: {
          userId: user.userName,
          wuphfId: Number(wid),
        },
      })

      res.json(likes)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }
    // #error - check to see if wuphf exists first
    // #validation - invalid input
  } else if (req.method === 'DELETE') {
    try {
      const like = await prisma.Likes.delete({
        where: {
          userId_wuphfId: {
            userId: user.userName,
            wuphfId: Number(wid),
          },
        },
      })

      res.json(like)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }
  }
}
