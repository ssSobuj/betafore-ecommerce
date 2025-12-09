"use server";

import { ApiResponse } from "@/types/api";
import type { Product } from "@/types/product";
import type { Category } from "@/types/category";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://mm-assesment-server.vercel.app/api/v1";

if (!BASE_URL) {
  throw new Error(
    "BASE_URL is not defined. Set NEXT_PUBLIC_API_BASE_URL in .env.local"
  );
}

async function parseApiResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as ApiResponse<T>;

  if (!json.success || json.data == null) {
    throw new Error(json.message || "Unexpected API response");
  }

  return json.data;
}

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
    // we can also give a time for revalidation and tag for ISR if needed in future
    // next: { revalidate: 60 }, // Revalidate every 60 seconds
    // tags: ["products"], // For ISR tagging
  });

  return parseApiResponse<Product[]>(res);
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    cache: "no-store",
    // we can also give a time for revalidation and tag for ISR if needed in future
    // next: { revalidate: 60 }, // Revalidate every 60 seconds
    // tags: ["products"], // For ISR tagging
  });

  return parseApiResponse<Category[]>(res);
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`, {
    cache: "no-store",
    // we can also give a time for revalidation and tag for ISR if needed in future
    // next: { revalidate: 60 }, // Revalidate every 60 seconds
    // tags: ["products"], // For ISR tagging
  });

  return parseApiResponse<Product[]>(res);
}

export async function getProduct(id: number | string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
    // we can also give a time for revalidation and tag for ISR if needed in future
    // next: { revalidate: 60 }, // Revalidate every 60 seconds
    // tags: ["products"], // For ISR tagging
  });

  return parseApiResponse<Product>(res);
}
