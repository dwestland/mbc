import { PrismaClient } from '@prisma/client'

interface CustomNodeJsGlobal {
  prisma: PrismaClient
}

declare const global: CustomNodeJsGlobal

const prisma =
  global.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        // Ensure this URL includes the timeout parameters
        url: process.env.DATABASE_URL, // Add to URL: &connect_timeout=10&statement_timeout=5000
      },
    },
    // log: ['query', 'info', 'warn', 'error'],
  })

if (process.env.NODE_ENV === 'development') global.prisma = prisma

// Function to handle disconnection
const disconnectPrisma = async () => {
  await prisma.$disconnect()
}

// Attach event listeners to handle process exit events
process.on('beforeExit', disconnectPrisma)
process.on('SIGINT', async () => {
  await disconnectPrisma()
  process.exit(0)
})

export default prisma
