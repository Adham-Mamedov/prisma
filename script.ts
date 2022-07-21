import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect();
  // ===== READ OPERATIONS =====
  // const users = await prisma.user.findMany();
  const user = await prisma.user.findUnique({
    where: {
      email: 'adham@gmail.com'
    }
  })

  const users = await prisma.user.findMany({
    where: {
      name: {
        equals: 'Adham',
      },
      email: {
        contains: 'test',
        mode: 'insensitive',
      },
      writtenPosts: {
        some: {
          averageRating: {gt: 4}
        }
      }
    },
    // skip: 1,
    // take: 2,
    // orderBy: {
    //   age: "desc"
    // },
    // distinct: ["name", "age"]
  });

  console.log({users, user})
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

