import { prisma, Prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
	const { id } = req.query

	if (req.method === 'GET') {
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

					res.json(comments)
				} catch (error) {
					console.error(error)
					res.status(500).json({ error })
					throw error
				}

				// #error - there are no comments!
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

					res.json(comment)
				} catch (error) {
					console.error(error)
					res.status(500).json({ error })
					throw error
				}

				// #error - the specified comment does not exist
			}
		} else {
			try {
				const wuphf = await prisma.Wuphf.findUnique({
					where: {
						id: Number(id[0]),
					},
				})

				res.json(wuphf)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			// #error - the specified wuphf does not exist
		}
	} else if (req.method === 'POST') {
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
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #error - the specified wuphf does not exist
		// #authorization - who is allowed to do this?
		// #validation - invalid input
	} else if (req.method === 'DELETE') {
		try {
			const wuphf = await prisma.Wuphf.delete({
				where: {
					id: Number(id[0]),
				},
			})

			res.json(wuphf)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #error - the specified wuphf does not exist
		// #authorization - who is allowed to do this?
	}
}
