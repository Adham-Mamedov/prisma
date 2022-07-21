import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect();
  // ===== UPDATE OPERATIONS =====
  const user = await prisma.user.update({
    where: {
      email: 'adham@gmail.com'
    },
    data: {
      name: 'Adkham',
      age: {
        increment: 1,
        // decrement: 1,
        // multiply: 10,
        // divide: 10,
      }
    },
    select: {
      name: true,
      age: true
    }
  })
  const usersCount = await prisma.user.updateMany({
    where: {
      email: {
        endsWith: 'gmail.com'
      },
      name: 'Adkham'
    },
    data: {
      name: 'Adham'
    }
  })

  console.log({user, usersCount})
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

