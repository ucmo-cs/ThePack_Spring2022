import { prisma, Prisma } from '../../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
	const session = await getSession({ req })

	if (session) {
		if (req.method === 'GET') {
			try {
				const user = await prisma.WuphfUser.findUnique({
					where: {
						email: session.user.email,
						// email: 'cpg55850@ucmo.edu',
					},
				})

				res.json(user)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}
		} else if (req.method === 'POST') {
			try {
				const user = await prisma.WuphfUser.create({
					data: {
						email: req.body.email,
						userName: req.body.userName,
						bio: req.body.bio || undefined,
					},
				})

				res.json(user)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			// #error - the user already has that username! (unique constraint)
			// #validation - invalid input
		} else if (req.method === 'PATCH') {
			try {
				const user = await prisma.WuphfUser.update({
					where: {
						email: req.body.email,
					},
					data: {
						userName: req.body.userName,
						bio: req.body.bio || undefined,
					},
				})

				res.json(user)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			// #error - the specified user does not exist
			// #authorization - who is allowed to do this?
			// #validation - invalid input
		} else if (req.method === 'DELETE') {
			let user = await prisma.User.findUnique({
				where: {
					email: req.body.email,
				},
			})

			const { id } = user

			try {
				user = await prisma.User.delete({
					where: {
						id,
					},
				})

				res.json(user)
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
				throw error
			}

			// #error - the specified user does not exist
			// #authorization - who is allowed to do this?
		}
	}
	res.end()
}
