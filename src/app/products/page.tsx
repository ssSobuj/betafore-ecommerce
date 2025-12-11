import { getAllProducts } from "@/actions/products";
import { ProductsSection } from "@/components/home/products-section";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="pt-6">
      <ProductsSection title1="All " title2="Products" products={products} />
    </div>
  );
}
