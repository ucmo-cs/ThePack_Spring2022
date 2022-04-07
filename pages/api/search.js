import { prisma, Prisma } from '../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (session) {
        if (req.method === 'GET') {
            try {
                const users = (await prisma.WuphfUser.findMany({
                    where: {
                        OR: [
                                { userName: { startsWith: req.query.userName}},
                                { userName: { endsWith: req.query.userName,}}
                            ]
                    },
                    select: {
                        userName: true,
                    }
                })).map(user => {
                    return {
                        userName: user.userName,
                        // TODO: Remove once avatars are set in the User table
                        avatar: 'animal_svgs/bunny_tgvcdh.svg'
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
