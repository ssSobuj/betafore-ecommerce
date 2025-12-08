import type { Product } from "@/types/product";
import { ProductCard } from "@/components/product/product-card";

interface ProductsSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function ProductsSection({
  title,
  subtitle,
  products,
}: ProductsSectionProps) {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <header className="mb-4 flex items-baseline justify-between">
        <h2 className="text-xl font-semibold text-brand-accent">{title}</h2>
        {subtitle ? (
          <span className="text-sm text-slate-500">{subtitle}</span>
        ) : null}
      </header>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
