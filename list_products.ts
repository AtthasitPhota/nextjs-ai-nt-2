// List up to 10 products from the database
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const prisma = new PrismaClient({ adapter: new PrismaMariaDb(process.env.DATABASE_URL!) });

async function main() {
  const products = await prisma.product.findMany({ take: 10 });
  console.table(products);

  const total = await prisma.product.count();
  console.log('Total products in database:', total);
}

main()
  .catch((e) => console.error("Error fetching products:", e))
  .finally(() => prisma.$disconnect());
