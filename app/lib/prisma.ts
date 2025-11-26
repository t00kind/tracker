import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

// Глобальное хранилище для Prisma клиента в dev режиме
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  pool: Pool | undefined
}

// Создаем единственный экземпляр Pool для PostgreSQL
const pool = globalForPrisma.pool ?? new Pool({
  connectionString: process.env.DATABASE_URL
})

// Создаем adapter
const adapter = new PrismaPg(pool)

// Создаем единственный экземпляр Prisma клиента
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

// В dev режиме сохраняем клиент глобально, чтобы избежать создания множества экземпляров
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
  globalForPrisma.pool = pool
}

export default prisma

