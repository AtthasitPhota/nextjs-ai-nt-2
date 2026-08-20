const { PrismaClient } = require('./generated/prisma/client');
(async () => {
  const prisma = new PrismaClient();
  const tables = await prisma.$queryRaw`SHOW TABLES`;
  console.log('Tables:', tables);
  await prisma.$disconnect();
})();