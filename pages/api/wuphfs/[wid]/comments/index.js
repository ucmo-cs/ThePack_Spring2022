import { prisma } from '../../../../../lib/prisma'

export default async function handler(req, res) {
	const { wid } = req.query

	// /wuphfs/[wid]/comments
	if (req.method === 'GET') {
		try {
			const comments = await prisma.Comments.findMany({
				where: {
					postsId: Number(wid),
				},
			})

			if (comments.length === 0) {
				return res.status(404).json({ msg: 'No comments found' })
			}

			res.json(comments)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}
	} else if (req.method === 'POST') {
		try {
			const comment = await prisma.Comments.create({
				data: {
					postsId: Number(wid),
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

		// #error - check to see if wuphf exists first
		// #validation - invalid input
	}
}
