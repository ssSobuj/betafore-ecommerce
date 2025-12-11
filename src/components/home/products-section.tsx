import type { Product } from "@/types/product";
import { ProductCard } from "@/components/product/product-card";
import type { Category } from "@/types/category";
import Link from "next/link";

interface ProductsSectionProps {
  products: Product[];
  title1: string;
  title2: string;
  categories?: Category[];
  activeCategory?: string;
  categoryQueryKey?: string;
}

export function ProductsSection({
  products,
  title1,
  title2,
  categories,
  activeCategory = "all",
  categoryQueryKey = "bestCategory",
}: ProductsSectionProps) {
  const hasCategories = !!categories && categories.length > 0;

  const normalizedActive =
    activeCategory && activeCategory !== "all" && hasCategories
      ? activeCategory
      : "all";

  let prevCategoryHref = "/";
  let nextCategoryHref = "/";

  if (hasCategories) {
    const names = categories!.map((c) => c.name);
    const currentIndex =
      normalizedActive === "all"
        ? -1
        : names.findIndex((n) => n === normalizedActive);

    const prevIndex =
      currentIndex <= 0 ? names.length - 1 : (currentIndex - 1) % names.length;
    const nextIndex = (currentIndex + 1 + names.length) % names.length;

    const prevName = names[prevIndex];
    const nextName = names[nextIndex];

    prevCategoryHref = `/?${categoryQueryKey}=${encodeURIComponent(prevName)}`;
    nextCategoryHref = `/?${categoryQueryKey}=${encodeURIComponent(nextName)}`;
  }

  return (
    <section className="mt-20 px-[51px]">
      <header className="mb-4 flex items-baseline justify-between">
        <h2 className="text-[28px] font-normal">
          <span className="text-secondary">{title1}</span> {title2}
        </h2>

        {hasCategories && (
          <div className="flex items-center gap-12">
            <ul className="flex items-center gap-6">
              {/* <li className="inline-block mr-4">
                <Link
                  href="/"
                  className={`text-sm cursor-pointer ${
                    normalizedActive === "all"
                      ? "text-text-2 font-semibold"
                      : "text-[#697475] hover:text-text-2"
                  }`}
                >
                  All
                </Link>
              </li> */}

              {/* Category buttons */}
              {categories!.map((cat) => {
                const isActive = normalizedActive === cat.name;

                return (
                  <li
                    key={cat.id}
                    className={`inline-block pr-4 pb-3 ${
                      isActive ? "border-b-3 border-text-2" : ""
                    }`}
                  >
                    <Link
                      href={`/?${categoryQueryKey}=${encodeURIComponent(
                        cat.name
                      )}`}
                      className={`text-[19px] cursor-pointer capitalize ${
                        isActive ? "text-text-2 " : " hover:text-text-2"
                      }`}
                      scroll={false}
                    >
                      {cat.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Left / right arrows */}
            <div className="flex items-center gap-4 pb-3">
              <Link
                scroll={false}
                href={prevCategoryHref}
                aria-label="Previous category"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={9}
                  height={14}
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path d="M9 14L0 7L9 0V14Z" fill="#1A1C1C" />
                </svg>
              </Link>

              <Link
                scroll={false}
                href={nextCategoryHref}
                aria-label="Next category"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={9}
                  height={14}
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path d="M0 14L9 7L0 0V14Z" fill="#1A1C1C" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </header>

      <div className="grid gap-[31px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
