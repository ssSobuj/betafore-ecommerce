import { getCategories, getProductsByCategory } from "@/actions/products";
import { ProductsSection } from "@/components/home/products-section";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.category);
  const products = await getProductsByCategory(categoryName);
  const categories = await getCategories();

  return (
    <div className="pt-6">
      <ProductsSection
        title1="Best"
        title2="Deals"
        products={products}
        categories={categories}
        activeCategory={categoryName ?? "all"}
        categoryQueryKey="bestCategory"
      />
    </div>
  );
}
