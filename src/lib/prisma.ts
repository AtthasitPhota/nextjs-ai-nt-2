// src/lib/prisma.ts
import "dotenv/config"
import { PrismaMariaDb } from "@prisma/adapter-mariadb"
import { PrismaClient } from "@generated/prisma/client"

const createPrismaClient = () => {
  const adapter = new PrismaMariaDb(process.env.DATABASE_URL!)
  return new PrismaClient({ adapter })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof createPrismaClient>
}

const getPrisma = () => {
  globalThis.prismaGlobal ??= createPrismaClient()
  return globalThis.prismaGlobal
}

const prisma = new Proxy({} as ReturnType<typeof createPrismaClient>, {
  get: (_target, prop) =>
    (getPrisma() as unknown as Record<PropertyKey, unknown>)[prop],
})

export default prisma