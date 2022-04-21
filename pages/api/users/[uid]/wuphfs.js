import { prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
	const { uid } = req.query

	// /users/[uid]/wuphfs
	if (req.method === 'GET') {
		try {
			const wuphfs = await prisma.Wuphf.findMany({
				where: {
					userId: uid,
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

			if (wuphfs.length === 0) {
				return res.status(404).json({ msg: `No Wuphfs by ${uid} found` })
			}

			res.json(wuphfs)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}
	}
}

// import { getSession } from 'next-auth/react'

// import { prisma } from '../../../../lib/prisma'

// export default async function handler(req, res) {
// 	const { uid } = req.query
// 	const session = await getSession({ req })

// 	// /users/[uid]/wuphfs
// 	if (req.method === 'GET') {
// 		try {
// 			const wuphfUser = await prisma.WuphfUser.findUnique({
// 				where: {
// 					email: session.user.email,
// 				},
// 			})

// 			const wuphfs = await getUserWuphfs(wuphfUser)

// 			if (wuphfs.length === 0) {
// 				return res.status(404).json({ msg: `No Wuphfs by ${uid} found` })
// 			}

// 			res.json(wuphfs)
// 		} catch (error) {
// 			console.error(error)
// 			res.status(500).json({ error })
// 			throw error
// 		}
// 	}
// }

// async function getUserWuphfs(wuphfUser) {
// 	if (wuphfUser) {
// 		const wuphfs = (
// 			await prisma.Wuphf.findMany({
// 				where: {
// 					userId: wuphfUser.userName,
// 				},
// 				include: {
// 					Likes: true,
// 					_count: {
// 						select: {
// 							Likes: true,
// 							Comments: true,
// 						},
// 					},
// 				},
// 				orderBy: {
// 					createdAt: 'desc',
// 				},
// 			})
// 		).map((wuphf) => {
// 			const userLikePost = wuphf.Likes.some(
// 				(like) => like.userId === wuphfUser.userName
// 			)
// 			delete wuphf.Likes
// 			return {
// 				...wuphf,
// 				userLikePost,
// 			}
// 		})

// 		return wuphfs
// 	} else {
// 		const wuphfs = await prisma.Wuphf.findMany({
// 			where: {
// 				userId: uid,
// 			},
// 			include: {
// 				_count: {
// 					select: {
// 						Likes: true,
// 						Comments: true,
// 					},
// 				},
// 			},
// 			orderBy: {
// 				createdAt: 'desc',
// 			},
// 		})

// 		return wuphfs
// 	}
// }
