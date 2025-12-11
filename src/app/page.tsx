import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "@/actions/products";
import { Hero } from "@/components/home/hero";
import { CategoryStrip } from "@/components/home/category-strip";
import { ProductsSection } from "@/components/home/products-section";
import type { Product } from "@/types/product";

// you can keep this or remove it; using searchParams already makes the route dynamic
export const dynamic = "force-dynamic";

interface HomePageProps {
  // ✅ In Next 16, searchParams is a Promise
  searchParams: Promise<{ bestCategory?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  // ✅ Await the promise to get the actual object
  const sp = await searchParams;
  const bestCategory = sp.bestCategory;

  console.log("bestCategory from URL:", bestCategory);

  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);

  const newArrivals: Product[] = products.slice(0, 6);

  let bestDeals: Product[];

  if (!bestCategory || bestCategory === "all") {
    bestDeals = products; // default: all products
  } else {
    const categoryProducts = await getProductsByCategory(bestCategory);
    bestDeals = categoryProducts.slice(0, 12);
  }

  return (
    <>
      <Hero />
      <CategoryStrip categories={categories} />

      <ProductsSection title1="New" title2="Arrivals" products={newArrivals} />

      <ProductsSection
        title1="Best"
        title2="Deals"
        products={bestDeals}
        categories={categories}
        activeCategory={bestCategory ?? "all"}
        categoryQueryKey="bestCategory"
      />
    </>
  );
}
