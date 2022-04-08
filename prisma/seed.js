const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const users = await prisma.User.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        image: 'https://www.johndoe.com/',
        id: 'abc123',
      },
      {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
        image: 'https://www.janedoe.com/',
        id: 'def123',
      },
    ],
    skipDuplicates: true,
  })
  const wuphfUsers = await prisma.WuphfUser.createMany({
    data: [
      {
        userName: 'johndoe',
        email: 'johndoe@gmail.com',
        bio: 'hi I am john',
      },
      {
        userName: 'janedoe',
        email: 'janedoe@gmail.com',
        bio: 'hi I am jane',
      },
    ],
    skipDuplicates: true,
  })
  const wuphfs = await prisma.Wuphf.createMany({
    data: [
      {
        userId: 'johndoe',
        pictureUrl: 'url',
        postBody: "This is John's post",
      },
      {
        userId: 'janedoe',
        pictureUrl: 'url2',
        postBody: "This is Jane's post",
      },
    ],
    skipDuplicates: true,
  })
  const comments = await prisma.Comments.create({
    data: {
      postsId: 1,
      commentBody: "Hi, this is Jane's comment",
      userId: 'janedoe',
    },
  })
  const likes = await prisma.Likes.create({
    data: {
      userId: 'janedoe',
      wuphfId: 1,
    },
  })
  const follows = await prisma.Follower.create({
    data: {
      userId: 'janedoe', //username to follow
      followerId: 'johndoe', //our username
    },
  })
  console.log({ users, wuphfUsers, wuphfs, comments, likes, follows })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
