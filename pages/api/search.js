import { getSession } from 'next-auth/react'

import { prisma } from '../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (session) {
        if (req.method === 'GET') {
            try {
                const users = await prisma.WuphfUser.findMany({
                    where: {
                        OR: [
                                { userName: { startsWith: req.query.userName}},
                                { userName: { endsWith: req.query.userName,}}
                            ]
                    },
                    select: {
                        userName: true,
                        avatar: {
                            select: {
                                url: true,
                            }
                        }
                    }
                })

                res.json(users || [])
            } catch (error) {
                console.error(error)
                res.status(500).json({ error })
                throw error
            }
        }

    } else {
        res.status(401).json({ msg: 'User not authenticated' })
    }
    res.end()
}
