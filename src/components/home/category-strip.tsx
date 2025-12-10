import Link from "next/link";
import type { Category } from "@/types/category";

interface CategoryStripProps {
  categories: Category[];
}

export function CategoryStrip({ categories }: CategoryStripProps) {
  console.log(categories);

  return <section></section>;
}
