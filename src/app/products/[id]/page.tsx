import { getProduct } from "@/actions/products";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // 👈 IMPORTANT
  const productId = Number(id);

  console.log("Product ID:", productId);

  if (isNaN(productId)) {
    throw new Error("Invalid product ID");
  }

  const product = await getProduct(productId);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-[1.3fr,2fr]">
        <div className="flex items-center justify-center rounded border border-slate-200 bg-white p-8">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="h-64 w-auto object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-slate-900">
            {product.title}
          </h1>
          <p className="text-sm uppercase text-slate-500">{product.category}</p>

          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold text-brand-accent">
              ${product.price}
            </p>
            <p className="text-xs text-slate-500">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>

          <p className="text-sm leading-relaxed text-slate-700">
            {product.description}
          </p>

          <button className=" mt-4  text-[15px] bg-secondary text-white px-9 py-[9px]  hover:bg-secondary cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
