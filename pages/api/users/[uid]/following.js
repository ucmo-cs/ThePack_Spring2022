import { getSession } from 'next-auth/react'

import { Prisma, prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
	const session = await getSession({ req })
	const uid = decodeURIComponent(req.query.uid)

	// /users/[uid]/following
	if (req.method === 'GET') {
		if (session) {
			const wuphfUser = await prisma.WuphfUser.findUnique({
				where: {
					email: session.user.email,
					// email: 'cpg55850@ucmo.edu',
				},
			})

			// if (!wuphfUser) {
			// 	return res.status(404).json({
			// 		msg: `No WuphfUser found with the email ${session.user.email}`,
			// 	})
			// }

			try {
				const users = await Prisma.Follower.FindMany({
					where: {
						followerId: wuphfUser.userName,
					},
					select: {
						userId,
					},
				})

				res.json(users)
			} catch (error) {
				// console.error(error)
				res.status(500).json({ error })
				throw error
			}
		} else {
			try {
				const users = await prisma.Follower.findMany({
					where: {
						followerId: req.body.followerId,
					},
					select: {
						userId: true,
					},
				})

				res.json(users)
			} catch (error) {
				// console.error(error)
				res.status(500).json({ error })
				throw error
			}
		}
	} else if (req.method === 'POST') {
		// uid who we're following - /api/user/charles/follow
		// session.user.email
		// then find user with that email
		// grab id from that user - who we are
		let currentUser

		if (session) {
			try {
				currentUser = await prisma.WuphfUser.findUnique({
					where: {
						email: session.user.email, // our email
					},
				})
			} catch (error) {
				// console.error(error)
				res.status(500).json({ error })
				throw error
			}
		} else {
			try {
				currentUser = await prisma.WuphfUser.findUnique({
					where: {
						email: req.body.email, // our email
					},
				})
			} catch (error) {
				// console.error(error)
				res.status(500).json({ error })
				throw error
			}
		}

		const { userName } = currentUser

		// try to find the user we're following
		try {
			if (uid === userName) {
				return res.status(400).json({
					msg: 'You cannot follow yourself',
				})
			}
			const userToFollow = await prisma.WuphfUser.findUnique({
				where: {
					userName: uid,
				},
			})

			if (!userToFollow) {
				return res.status(404).json({
					msg: 'The WuphfUser you are trying to follow does not exist',
				})
			}
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}

		try {
			await prisma.Follower.create({
				data: {
					userId: uid, //username to follow
					followerId: userName, //our username
				},
			})
			res.end(`Followed ${uid}`)
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #validation
		// #authorization - who is allowed to do this?
	} else if (req.method === 'DELETE') {
		let currentUser

		try {
			currentUser = await prisma.WuphfUser.findUnique({
				where: {
					email: session.user.email,
				},
			})
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}

		const { userName } = currentUser

		// try to find the user we're following
		try {
			const userToFollow = await prisma.WuphfUser.findUnique({
				where: {
					userName: uid,
				},
			})

			// if (!userToFollow) {
			// 	return res.status(404).json({
			// 		msg: 'The WuphfUser you are trying to unfollow does not exist',
			// 	})
			// }
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}

		try {
			await prisma.Follower.delete({
				where: {
					userId_followerId: {
						userId: uid, //username to follow
						followerId: userName, //our username
					},
				},
			})
			res.end(`Unfollowed ${uid}`)
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #authorization - who is allowed to do this?
	}
}
