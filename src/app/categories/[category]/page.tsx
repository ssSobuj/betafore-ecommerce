import { getProductsByCategory } from "@/actions/products";
import { ProductsSection } from "@/components/home/products-section";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.category);
  const products = await getProductsByCategory(categoryName);

  const title =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();

  return (
    <div className="pt-6">
      <ProductsSection
        title={title}
        subtitle={`Products in ${title}`}
        products={products}
      />
    </div>
  );
}
