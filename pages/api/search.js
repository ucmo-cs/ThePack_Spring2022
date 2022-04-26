
import { prisma } from '../../lib/prisma'

export default async function handler(req, res) {
	// const session = await getSession({ req })

	// if (session) {
	if (req.method === 'GET') {
		// return res.send()
		try {
			const users = await prisma.WuphfUser.findMany({
				where: {
					userName: {
						contains: req.query.userName.trim(),
						mode: 'insensitive',
					},
					// OR: [
					// 	{
					// 		userName: {
					// 			startsWith: ,
					// 			mode: 'insensitive',
					// 		},
					// 	},
					// 	{
					// 		userName: { endsWith: req.query.userName, mode: 'insensitive' },
					// 	},
					// ],
				},
				select: {
					userName: true,
					avatar: {
						select: {
							url: true,
						},
					},
				},
			})

			res.json(users)
		} catch (error) {
			// console.error(error)
			res.status(500).json({ error })
			throw error
		}
	}
}
// else {
// 	res.status(401).json({ message: 'User not authenticated' })
// }
// res.end()
// }
