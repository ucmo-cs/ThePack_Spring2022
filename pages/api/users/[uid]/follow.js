import { prisma, Prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
	const { uid } = req.query

	// /users/[uid]/follow
	if (req.method === 'POST') {
		// uid who we're following - /api/user/charles/follow
		// session.user.email
		// then find user with that email
		// grab id from that user - who we are
		let currentUser

		try {
			currentUser = await prisma.WuphfUser.findUnique({
				where: {
					email: req.body.email, // our email
				},
			})
		} catch (error) {
			console.error(error)
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

			if (!userToFollow) {
				return res
					.status(404)
					.json({ msg: 'The user you are trying to follow does not exist' })
			}
		} catch (error) {
			console.error(error)
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
			console.error(error)
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
					email: req.body.email, // our email
				},
			})
		} catch (error) {
			console.error(error)
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

			if (!userToFollow) {
				return res.status(404).json({
					msg: 'The user you are trying to unfollow does not exist',
				})
			}
		} catch (error) {
			console.error(error)
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
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #authorization - who is allowed to do this?
	}
}
