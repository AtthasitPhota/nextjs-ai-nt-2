const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

(async () => {
  try {
    const products = await prisma.product.findMany({ include: { images: true } });
    for (const product of products) {
      if (product.images && product.images.length > 0) continue;
      const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const filename = `${slug}.png`;
      const url = `https://source.unsplash.com/featured/800x1000?${encodeURIComponent(product.name)}`;
      console.log(`Downloading ${product.name} -> ${filename}`);
      const res = await fetch(url);
      if (!res.ok) {
        console.error('Failed to fetch', product.name);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const outDir = path.join(__dirname, '..', 'public', 'product-image');
      await fs.promises.mkdir(outDir, { recursive: true });
      const filePath = path.join(outDir, filename);
      await fs.promises.writeFile(filePath, buffer);
      await prisma.product_images.create({
        data: { productId: product.id, imageName: filename },
      });
      console.log(`Saved ${filename}`);
    }
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
})();
