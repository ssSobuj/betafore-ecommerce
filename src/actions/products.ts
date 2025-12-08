"use server";

import { ApiResponse } from "@/types/api";
import type { Product } from "@/types/product";
import type { Category } from "@/types/category";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://mm-assesment-server.vercel.app/api/v1";

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
  });

  return parseApiResponse<Product[]>(res);
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    cache: "no-store",
  });

  return parseApiResponse<Category[]>(res);
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`, {
    cache: "no-store",
  });

  return parseApiResponse<Product[]>(res);
}

export async function getProduct(id: number | string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  return parseApiResponse<Product>(res);
}
