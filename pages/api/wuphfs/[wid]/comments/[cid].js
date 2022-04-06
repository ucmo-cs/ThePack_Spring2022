import { prisma, Prisma } from '../../../../../lib/prisma'

export default async function handler(req, res) {
	const { wid } = req.query
	const { cid } = req.query

	// wuphfs/[wid]/comments/[cid]
	if (req.method === 'GET') {
		try {
			const comment = await prisma.Comments.findUnique({
				where: {
					id_postsId: {
						id: Number(cid),
						postsId: Number(wid),
					},
				},
			})

			if (!comment) {
				return res.status(404).json({ msg: 'Comment not found' })
			}

			res.json(comment)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}
	}

	// need to add patch and delete here
}
