import { object, string } from 'yup'

import { prisma } from '../../../lib/prisma'

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

			// if (wuphfs.length === 0) {
			// 	return res.status(404).json({ message: 'No Wuphfs found' })
			// }

			res.json(wuphfs)
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}
	} else if (req.method === 'POST') {
		let wuphfSchema = object({
			userName: string().required(),
			pictureUrl: string(),
			postBody: string().trim().required(),
		})

		// validation
		try {
			await wuphfSchema.validate(req.body)
		} catch (error) {
			return res.status(400).json(error)
		}

		try {
			const wuphf = await prisma.Wuphf.create({
				data: {
					userId: req.body.userName,
					pictureUrl: req.body.pictureUrl, // not allowing undefined - fix later
					postBody: req.body.postBody.trim(),
				},
				select: {
					id: true,
					userId: true,
					pictureUrl: true,
					postBody: true,
					createdAt: true,
					user: {
						select: {
							userName: true,
							avatar: {
								select: {
									url: true,
								},
							},
						},
					},
					_count: {
						select: {
							Likes: true,
							Comments: true,
						},
					},
				},
			})
			res.json(wuphf)
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #validation - invalid input
	}
}
