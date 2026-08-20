require('ts-node').register({ transpileOnly: true });
const prisma = require('./src/lib/prisma').default;
(async () => {
  const tables = await prisma.$queryRaw`SHOW TABLES`;
  console.log('Tables:', tables);
  await prisma.$disconnect();
})();