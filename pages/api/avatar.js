import { prisma } from '../../lib/prisma'

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const avatars = await prisma.Avatar.findMany()

			// if (!avatars) {
			// 	return res
			// 		.status(404)
			// 		.json({ message: 'No avatars found with the user' })
			// }
			res.json(avatars)
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}
	}
}
