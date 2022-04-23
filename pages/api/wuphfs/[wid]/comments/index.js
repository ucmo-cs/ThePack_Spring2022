import { getSession } from 'next-auth/react'

import { prisma } from '../../../../../lib/prisma'

export default async function handler(req, res) {
	const { wid } = req.query
	const session = await getSession({ req })

	// /wuphfs/[wid]/comments
	if (req.method === 'GET') {
		try {
			const comments = await prisma.Comments.findMany({
				where: {
					postsId: Number(wid),
				},
			})

			// if (comments.length === 0) {
			// 	return res.status(404).json({ msg: 'No comments found' })
			// }

			res.json(comments)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error })
			throw error
		}
	} else if (req.method === 'POST') {
		let userId
		if(req.body.commentBody.trim().length === 0){
			res.status(400).json({msg:'Comment cannot contain only white space.'})
		}
		else{
			if (session) {
				const wuphfUser = await prisma.WuphfUser.findUnique({
					where: {
						email: session.user.email,
					},
				})

				userId = wuphfUser.userName
			} else {
				userId = req.body.userId
			}

			try {
				const comment = await prisma.Comments.create({
					data: {
						postsId: Number(wid),
						commentBody: req.body.commentBody,
						userId: userId,
					},
				})

				res.json(comment)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}
		}
		// #error - check to see if wuphf exists first
		// #validation - invalid input
	}
}
