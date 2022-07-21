import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect();
  // ===== DELETE OPERATIONS =====
  const deletedUser = await prisma.user.delete({
    where: {
      email: 'bob@gmail.com'
    }
  }).catch(e => console.error(e.message));

  const deletedUsers = await prisma.user.deleteMany({
    where: {
      email: 'adham@gmail.com'
    }
  }).catch(e => console.error(e.message))

  console.log({users: deletedUsers})
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

