import prisma from './src/lib/prisma.ts';
(async () => {
  const tables = await prisma.$queryRaw`SHOW TABLES`;
  console.log('Tables:', tables);
  await prisma.$disconnect();
})();