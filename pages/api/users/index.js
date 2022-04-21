import { Prisma, prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
	// /users
	if (req.method === 'GET') {
		try {
			const users = await prisma.WuphfUser.findMany()

			if (users.length === 0) {
				return res.status(404).json({ msg: 'No WuphfUsers found' })
			}

			res.json(users)
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
					// theme: 'light'
				},
			})

			res.json(user)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// The .code property can be accessed in a type-safe manner
				if (error.code === 'P2002') {
					return res.status(409).json({
						msg: 'A user with that username or email already exists.',
					})
				} else if (error.code === 'P2003') {
					return res.status(409).json({
						msg: 'A foreign key constraint failed.',
						error: error,
					})
				}
			}
			console.error(error)
			res.status(500).json({ error })
			throw error
		}

		// #validation - invalid input
	}
}
