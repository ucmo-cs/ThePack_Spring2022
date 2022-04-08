import { prisma, Prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
  //Error Handling here

  // /wuphfs
  if (req.method === 'GET') {
    try {
      const wuphfs = await prisma.Wuphf.findMany({
        orderBy: {
          createdAt: 'desc',
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
      // console.log('All Wuphfs', JSON.stringify(wuphfs, null, 2))

      if (wuphfs.length === 0) {
        return res.status(404).json({ msg: 'No Wuphfs found' })
      }

      res.json(wuphfs)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }
  } else if (req.method === 'POST') {
    try {
      const wuphf = await prisma.Wuphf.create({
        data: {
          userId: req.body.userName,
          pictureUrl: req.body.pictureUrl || undefined, // not allowing undefined - fix later
          postBody: req.body.postBody,
        },
      })

      res.json(wuphf)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      throw error
    }

    // #validation - invalid input
  }
}
