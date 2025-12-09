import { getAllProducts, getCategories } from "@/actions/products";
import { Hero } from "@/components/home/hero";
import { CategoryStrip } from "@/components/home/category-strip";
import { ProductsSection } from "@/components/home/products-section";
// import type { Product } from "@/types/product";

export default async function HomePage() {
  // const [products, categories] = await Promise.all([
  //   getAllProducts(),
  //   getCategories(),
  // ]);

  // const newArrivals: Product[] = products.slice(0, 5);
  // const bestDeals: Product[] = products.slice(5, 10);

  return (
    <>
      <Hero />
      {/* <CategoryStrip categories={categories} />

      <ProductsSection
        title="New Arrivals"
        subtitle="Latest products just for you"
        products={newArrivals}
      />

      <ProductsSection
        title="Best Deals"
        subtitle="Kitchen Appliances · Consoles · TV & Videos · Cell Phones · Grocery"
        products={bestDeals}
      /> */}
    </>
  );
}
