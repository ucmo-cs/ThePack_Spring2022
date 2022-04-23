import { getSession } from 'next-auth/react'

import { Prisma, prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
	const { wid } = req.query

	// /wuphfs/[wid]
	if (req.method === 'GET') {
		try {
			const wuphf = await prisma.Wuphf.findUnique({
				where: {
					id: Number(wid),
				},
				include: {
					_count: {
						select: {
							Likes: true,
							Comments: true,
						},
					},
					user: {
						select: {
							avatar: true,
						},
					},
				},
			})

			// if (!wuphf) {
			// 	return res.status(404).json({ msg: 'Wuphf not found' })
			// }

			res.json(wuphf)
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}
	} else if (req.method === 'PATCH') {
		const session = await getSession({ req })
		const user = await prisma.WuphfUser.findUnique({
			where: {
				email: session.user.email,
			},
		})

		try {
			const wuphf = await prisma.Wuphf.updateMany({
				where: {
					id: Number(wid),
					userId: user.userName,
				},
				data: {
					postBody: req.body.postBody,
					pictureUrl: req.body.pictureUrl || undefined,
				},
			})

			res.json(wuphf)
		} catch (error) {
			// P2025
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// The .code property can be accessed in a type-safe manner
				if (error.code === 'P2025') {
					return res
						.status(404)
						.json({ msg: 'The Wuphf to update was not found' })
				}
			}
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #authorization - who is allowed to do this?
		// #validation - invalid input
	} else if (req.method === 'DELETE') {
		try {
			const wuphf = await prisma.Wuphf.delete({
				where: {
					id: Number(wid),
				},
			})

			res.json(wuphf)
		} catch (error) {
			// P2025
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// The .code property can be accessed in a type-safe manner
				if (error.code === 'P2025') {
					return res
						.status(404)
						.json({ msg: 'The Wuphf to delete was not found' })
				}
			}
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #authorization - who is allowed to do this?
	}
}
