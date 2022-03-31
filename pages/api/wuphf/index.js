import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  //Error Handling here
  if (req.method === 'GET') {
    const wuphfs = await prisma.Wuphf.findMany()
    console.log('All Wuphfs', JSON.stringify(wuphfs, null, 2))

    res.json(wuphfs)
  } else if (req.method === 'POST') {
    const wuphf = await prisma.Wuphf.create({
      data: {
        userId: req.body.userName,
        pictureUrl: req.body.pictureUrl || undefined, // not allowing undefined - fix later
        postBody: req.body.postBody,
      },
    })

    res.json(wuphf)
  }
}
