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
        pictureUrl: 'url',
        postBody: "This is Jane's post",
      },
    ],
    skipDuplicates: true,
  })
  console.log({ users, wuphfUsers, wuphfs })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
