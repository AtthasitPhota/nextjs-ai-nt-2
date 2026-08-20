import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  // Ensure dynamic handling (cacheComponents enabled)
  await connection(); // signals this is a dynamic route
  const products = await prisma.product.findMany({
    include: { images: { take: 1, select: { imageName: true } } },
  });

  const serialized = products.map(p => ({
    ...p,
    price: Number(p.price),
    picture: p.images?.[0]?.imageName ?? '',
  }));

  return NextResponse.json(serialized);
}

// Import connection for dynamic route handling
import { connection } from 'next/server';
