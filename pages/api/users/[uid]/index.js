import { getSession } from 'next-auth/react'

import { prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
	const uid = String(req.query.uid)
	const session = await getSession({ req })

	// /users/[uid]
	if (req.method === 'GET') {
		try {
			console.log('GET /api/users/[uid]')
			console.log('uid:', uid)
			const user = await prisma.WuphfUser.findUnique({
				where: {
					userName: String(uid),
				},
				include: {
					wuphfs: true,
					avatar: true,
					Followers: {
						select: {
							followerId: true,
							userId: true,
							user: {
								select: {
									avatar: {
										select: {
											url: true,
										}
									},
								}
							}
						}
					},
					Following: {
						select: {
							followerId: true,
							userId: true,
							user: {
								select: {
									avatar: {
										select: {
											url: true,
										}
									},
								}
							}
						}
					},
					_count: {
						select: {
							Followers: true,
							Following: true,
						},
					},
				},
			})
			console.log('user:', user)
			if (!user) {
				console.log('Returning 404')
				return res
					.status(404)
					.json({ msg: `No WuphfUser found with the username ${uid}` })
			}

			if (session) {
				const sender = await prisma.WuphfUser.findUnique({
					where: {
						email: session.user.email,
					}
				})
				user.isFollowed = user.Followers.some(f => f.followerId === sender.userName)

				if (sender.userName !== user.userName) {
					delete user.Followers
					delete user.Following
				}
			}
			console.log('user:', user)
			res.json(user)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}
	} else if (req.method === 'PATCH') {
		try {
			const user = await prisma.WuphfUser.update({
				where: {
					userName: uid,
				},
				data: {
					userName: req.body.userName || undefined,
					bio: req.body.bio || undefined,
					theme: req.body.theme || undefined,
					avatarId: req.body.avatarId || undefined,
				},
			})

			if (!user) {
				return res.status(404).json({ msg: 'No WuphfUser found' })
			}

			res.json(user)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #authorization - who is allowed to do this?
		// #validation - invalid input
	} else if (req.method === 'DELETE') {
		const wuphfUser = await prisma.WuphfUser.findUnique({
			where: {
				userName: uid,
			},
		})

		if (!wuphfUser) {
			return res.status(404).json({ msg: 'No WuphfUser found' })
		}

		const { email } = wuphfUser

		try {
			const user = await prisma.User.delete({
				where: {
					email: email,
				},
			})

			res.json(user)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #authorization - who is allowed to do this?
	}
}
