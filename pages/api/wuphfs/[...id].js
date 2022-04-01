import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    if (id[1] == 'comments') {
      if (id[2] != null) {
        // get all of the comments for the post
        const comment = await prisma.Comments.findUnique({
          where: {
            id_postsId: {
              id: Number(id[2]),
              postsId: Number(id[0]),
            },
          },
        })

        res.json(comment)
      } else {
        // get all of the comments for the post
        const comments = await prisma.Comments.findMany({
          where: {
            postsId: Number(id[0]),
          },
        })

        res.json(comments)
      }
    } else {
      const wuphf = await prisma.Wuphf.findUnique({
        where: {
          id: Number(id[0]),
        },
      })

      res.json(wuphf)
    }
  } else if (req.method === 'POST') {
    if (id[1] == 'comments') {
      // make a new comment

      const comment = await prisma.Comments.create({
        data: {
          postsId: Number(id[0]),
          commentBody: req.body.commentBody,
          userId: 'johndoe',
        },
      })

      res.json(comment)
    }
  } else if (req.method === 'PATCH') {
    const wuphf = await prisma.Wuphf.update({
      where: {
        id: Number(id[0]),
      },
      data: {
        postBody: req.body.postBody,
        pictureUrl: req.body.pictureUrl || undefined,
      },
    })

    res.json(wuphf)
  } else if (req.method === 'DELETE') {
    const wuphf = await prisma.Wuphf.delete({
      where: {
        id: Number(id[0]),
      },
    })

    res.json(wuphf)
  }
}
