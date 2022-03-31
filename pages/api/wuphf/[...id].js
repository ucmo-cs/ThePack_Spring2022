import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    const wuphf = await prisma.Wuphf.findUnique({
      where: {
        id: Number(id[0]),
      },
    })

    res.json(wuphf)
  } else if (req.method === 'PATCH') {
    const wuphf = await prisma.Wuphf.update({
      where: {
        id: Number(id[0]),
      },
      data: {
        postBody: req.body.postBody,
        pictureUrl: req.body.pictureUrl || undefined,
      },
    })

    res.json(wuphf)
  } else if (req.method === 'DELETE') {
    const wuphf = await prisma.Wuphf.delete({
      where: {
        id: Number(id[0]),
      },
    })

    res.json(wuphf)
  }
}
