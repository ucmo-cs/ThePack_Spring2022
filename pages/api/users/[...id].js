import { prisma, Prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
	const { id } = req.query

	if (req.method === 'GET') {
		if (id[1] == 'wuphfs') {
			try {
				const wuphfs = await prisma.Wuphf.findMany({
					where: {
						userId: id[0],
					},
				})

				res.json(wuphfs)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}
		} else {
			try {
				const user = await prisma.WuphfUser.findUnique({
					where: {
						userName: id[0],
					},
					include: {
						wuphfs: true,
					},
				})

				res.json(user)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}
		}
	} else if (req.method === 'POST') {
		if (id[1] == 'follow') {
			// id[0] who we're following - /api/user/charles/follow
			// session.user.email
			// then find user with that email
			// grab id from that user - who we are
			let user

			try {
				user = await prisma.WuphfUser.findUnique({
					where: {
						email: req.body.email, // our email
					},
				})
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			const { userName } = user

			try {
				await prisma.Follower.create({
					data: {
						userId: id[0], //username to follow
						followerId: userName, //our username
					},
				})
				res.end(`Followed ${id[0]}`)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			// #validation
			// #authorization - who is allowed to do this?
		}
	} else if (req.method === 'DELETE') {
		if (id[1] == 'follow') {
			let user

			try {
				user = await prisma.WuphfUser.findUnique({
					where: {
						email: req.body.email, // our email
					},
				})
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			const { userName } = user

			try {
				await prisma.Follower.delete({
					where: {
						userId_followerId: {
							userId: id[0], //username to follow
							followerId: userName, //our username
						},
					},
				})
				res.end(`Unfollowed ${id[0]}`)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			// #error - the specified user does not exist
			// #authorization - who is allowed to do this?
		}
	}
}
