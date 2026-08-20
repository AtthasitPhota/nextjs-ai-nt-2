const prisma = require('./src/lib/prisma');

async function main() {
  try {
    const products = await prisma.product.findMany();
    console.table(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
