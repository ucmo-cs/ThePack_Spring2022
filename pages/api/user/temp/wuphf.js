import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const { userName } = req.query

  if (req.method === 'GET') {
    const wuphfs = await prisma.WuphfUser.findMany({
      where: {
        userName: userName[0],
      },
    })

    res.json(wuphfs)
  }
}
