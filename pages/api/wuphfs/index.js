import { prisma, Prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
	//Error Handling here
	if (req.method === 'GET') {
		try {
			const wuphfs = await prisma.Wuphf.findMany()
			console.log('All Wuphfs', JSON.stringify(wuphfs, null, 2))

			res.json(wuphfs)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #error - there are no wuphfs!
		// should sort by date
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
