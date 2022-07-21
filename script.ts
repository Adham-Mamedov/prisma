import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect();
  await prisma.user.deleteMany();
  await prisma.userPreference.deleteMany();
  // ===== CREATE OPERATIONS =====

  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Adham',
  //     email: 'adhammamedov@mail.ru',
  //     age: 21,
  //     userPreference: {
  //       create: {
  //         emailUpdates: true
  //       }
  //     }
  //   },
  //   select: {
  //     email: true,
  //     userPreference: {
  //       select: {
  //         id: true
  //       }
  //     }
  //   }
  //   // include: {
  //   //   userPreference: true
  //   // }
  // })
  //
  // const preferences = await prisma.userPreference.findMany()
  // const users = await prisma.user.findMany()

  const usersCount = await prisma.user.createMany({
    data: [
      {
        name: 'Adham',
        email: 'adham@gmail.com',
        age: 21,
      },
      {
        name: 'Bob',
        email: 'bob@gmail.com',
        age: 36,
      }
    ]
  })

  console.log({usersCount})
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

