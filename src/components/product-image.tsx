"use client"

import { useState } from "react";
import Image from "next/image";

export default function ProductImage({
  name,
  src,
}: {
  name: string;
  src: string | null;
}) {
  // Use a mutable variable so we can assign a fallback URL when needed.
  let imageSrc = src;
  const [failed, setFailed] = useState(false);

  if (!imageSrc || failed) {
    // Fallback to an online image based on the product name.
    // Using Unsplash source which returns a random image matching the query.
    imageSrc = `https://source.unsplash.com/featured/400x500?${encodeURIComponent(name)}`;
    // Reset failed flag to allow the Image component to attempt loading the fallback.
    // This prevents an infinite loop because the fallback URL should succeed.
    // Continue to render the Image component below.
  }

  return (
    <Image
      alt={name}
      className="size-full bg-muted object-cover transition-transform duration-300 group-hover/card:scale-105"
      width={0}
      height={0}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      src={imageSrc!}
      loading="eager"
      onError={() => setFailed(true)}
    />
  );
}
