/* eslint-disable no-return-await */
import { PrismaClient } from '@prisma/client'
// import users from '../seed-data/users'
import cams from '../seed-data/cams'

const prisma = new PrismaClient()

async function main() {
  // await prisma.user.createMany({
  //   data: users,
  // })
  await prisma.cams.createMany({
    data: cams,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(0)
  })
  .finally(async () => await prisma.$disconnect)
