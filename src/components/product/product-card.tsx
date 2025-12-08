import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <span className="mb-2 text-[11px] text-slate-500">
        Bin Bakar Electronics
      </span>

      <Link
        href={`/products/${product.id}`}
        className="mb-3 flex items-center justify-center"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className="h-32 w-auto object-contain"
        />
      </Link>

      <Link href={`/products/${product.id}`}>
        <h3 className="mb-1 h-9 overflow-hidden text-ellipsis text-sm font-semibold text-slate-900">
          {product.title}
        </h3>
      </Link>

      <div className="mt-auto">
        <div className="mb-1 text-xs text-slate-400 line-through">
          RS 60,000
        </div>
        <div className="mb-3 text-sm font-semibold text-brand-accent">
          RS {product.price}
        </div>
        <button className="w-full rounded bg-brand-accent py-2 text-xs font-semibold text-white">
          Add to cart
        </button>
      </div>
    </article>
  );
}
