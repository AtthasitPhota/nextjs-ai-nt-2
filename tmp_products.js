require('dotenv/config');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const { PrismaClient } = require('@prisma/client');

const adapter = new PrismaMariaDb(process.env.DATABASE_URL);
const prisma = new PrismaClient({ adapter });

(async () => {
  const products = await prisma.product.findMany({
    include: { images: { take: 1, select: { imageName: true } } },
  });
  console.log('Products count:', products.length);
  console.log(JSON.stringify(products, null, 2));
  await prisma.$disconnect();
})();