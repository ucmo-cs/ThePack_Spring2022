import { prisma, Prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
	const { id } = req.query

	if (req.method === 'GET') {
		if (id[1] == 'likes') {
			try {
				const likes = await prisma.Likes.findMany({
					where: {
						wuphfId: Number(id[0]),
					},
				})

				res.json(likes)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}
		}
		if (id[1] == 'comments') {
			// /wuphs/1/comments
			if (id[2] == null) {
				// get all of the comments for the post
				try {
					const comments = await prisma.Comments.findMany({
						where: {
							postsId: Number(id[0]),
						},
					})

					if (comments.length === 0) {
						return res.status(404).json({ error: 'No comments found' })
					}

					res.json(comments)
				} catch (error) {
					console.error(error)
					res.status(500).json({ error })
					throw error
				}
			} else {
				// /wuphs/1/comments/1
				// get all of the comments for the post
				try {
					const comment = await prisma.Comments.findUnique({
						where: {
							id_postsId: {
								id: Number(id[2]),
								postsId: Number(id[0]),
							},
						},
					})

					if (!comment) {
						return res.status(404).json({ error: 'Comment not found' })
					}

					res.json(comment)
				} catch (error) {
					console.error(error)
					res.status(500).json({ error })
					throw error
				}
			}
		} else {
			try {
				const wuphf = await prisma.Wuphf.findUnique({
					where: {
						id: Number(id[0]),
					},
				})

				if (!wuphf) {
					return res.status(404).json({ error: 'Wuphf not found' })
				}

				res.json(wuphf)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}
		}
	} else if (req.method === 'POST') {
		if (id[1] == 'likes') {
			try {
				const likes = await prisma.Likes.create({
					data: {
						userId: 'johndoe',
						wuphfId: Number(id[0]),
					},
				})

				res.json(likes)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}
		}
		if (id[1] == 'comments') {
			// /wuphs/1/comments
			// make a new comment
			try {
				const comment = await prisma.Comments.create({
					data: {
						postsId: Number(id[0]),
						commentBody: req.body.commentBody,
						userId: 'johndoe',
					},
				})

				res.json(comment)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			// #validation - invalid input
		}
	} else if (req.method === 'PATCH') {
		try {
			const wuphf = await prisma.Wuphf.update({
				where: {
					id: Number(id[0]),
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
						.json({ error: 'The Wuphf to update was not found' })
				}
			}
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #authorization - who is allowed to do this?
		// #validation - invalid input
	} else if (req.method === 'DELETE') {
		// return res.send(id[0])
		if (id[1] == 'likes' && id[2] != null) {
			try {
				const like = await prisma.Likes.delete({
					where: {
						userId_wuphfId: {
							userId: 'johndoe',
							wuphfId: 1,
						},
					},
				})

				res.json(like)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}
		}
		try {
			const wuphf = await prisma.Wuphf.delete({
				where: {
					id: Number(id[0]),
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
						.json({ error: 'The Wuphf to delete was not found' })
				}
			}
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #authorization - who is allowed to do this?
	}
}
