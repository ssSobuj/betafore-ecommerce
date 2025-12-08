import Link from "next/link";
import type { Category } from "@/types/category";

interface CategoryStripProps {
  categories: Category[];
}

export function CategoryStrip({ categories }: CategoryStripProps) {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4">
      <div className="flex gap-4 overflow-x-auto">
        {categories.map((cat) => {
          const href = `/categories/${encodeURIComponent(cat.name)}`;

          return (
            <div
              key={cat.id}
              className="min-w-[180px] flex-1 overflow-hidden rounded border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-24 bg-slate-100" />
              <div className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="capitalize">{cat.name}</span>
                <Link
                  href={href}
                  className="text-xs font-semibold text-brand-accent"
                >
                  Shop
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
