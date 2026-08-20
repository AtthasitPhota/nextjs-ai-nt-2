import prisma from './src/lib/prisma';
(async () => {
  const tables = await prisma.$queryRaw`SHOW TABLES`;
  console.log('Tables:', tables);
  await prisma.$disconnect();
})();