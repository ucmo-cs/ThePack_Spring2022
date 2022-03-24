// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// This is an example of how to read a JSON Web Token from an API route
// import { getToken } from 'next-auth/jwt'

// const secret = process.env.SECRET

// export default async (req, res) => {
//   const token = await getToken({ req, secret })
//   if (token) {
//     // Signed in
//     console.log('JSON Web Token', JSON.stringify(token, null, 2))
//   } else {
//     // Not Signed in
//     res.status(401)
//   }
//   res.end()
// }

import { getSession } from 'next-auth/react'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    console.log('Session', JSON.stringify(session, null, 2))
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}
