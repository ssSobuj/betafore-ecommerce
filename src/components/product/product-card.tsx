import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-[#d4d4d4] p-[14px]">
      <span className="mb-2 text-[12px] ">{product?.category}</span>
      <Link href={`/products/${product.id}`}>
        <h5 className="mb-1 h-9 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-normal text-[#034E53]">
          {product.title}
        </h5>
      </Link>

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

      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-3">
          {" "}
          <p className=" text-[13px] text-[#697475] line-through">RS 60,000</p>
          <p className=" text-[15px] text-text-2">RS {product.price}</p>
        </div>
        <button className="w-full text-[15px] bg-secondary text-white px-9 py-[9px]  hover:bg-secondary cursor-pointer">
          Add to cart
        </button>
      </div>
    </article>
  );
}
