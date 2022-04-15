import { prisma, Prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
  const { uid } = req.query

  // /users/[uid]/wuphfs
  if (req.method === 'GET') {
    try {
      const wuphfs = await prisma.Wuphf.findMany({
        where: {
          userId: uid,
        },
        include: {
          _count: {
            select: {
              Likes: true,
              Comments: true,
            },
          },
        },
      })

      if (wuphfs.length === 0) {
        return res.status(404).json({ msg: `No Wuphfs by ${uid} found` })
      }

      res.json(wuphfs)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }
  }
}