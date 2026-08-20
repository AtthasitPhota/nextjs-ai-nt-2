import FeaturesProduct from "@/components/features-product";
import prisma from "@/lib/prisma";
import { connection } from "next/server";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components



// http://localhost:3000/product
export default async function ProductPage() {
  // Ensure dynamic rendering with connection()
await connection(); // signals this is a dynamic route
  const products = await prisma.product.findMany({
    include: { images: { take: 1, select: { imageName: true } } },
  });
  
  // แปลง Decimal → number ก่อนส่งให้ Client Component
  const serializedProducts = products.map((p) => ({
    ...p,
    price: Number(p.price), // Decimal → number
    picture: p.images?.[0]?.imageName ?? '', // first image name
  }))

  return (
    <main>
      {/* { products.length> 0 && JSON.stringify(products) } */}
      {
        products.length > 0 && <FeaturesProduct products={serializedProducts} />
      }
    </main>
  );
}