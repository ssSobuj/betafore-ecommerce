"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <header className="border-b border-slate-200 bg-brand-dark text-white">
      {/* Top row */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded bg-white px-2 py-1 text-sm font-bold text-brand-dark">
            WIN
          </span>
          <span className="text-lg font-semibold">store</span>
        </Link>

        {/* Search */}
        <div className="flex flex-1 items-center gap-3">
          <select
            className="hidden rounded bg-white px-3 py-2 text-sm text-slate-800 md:block"
            defaultValue="all"
          >
            <option value="all">All categories</option>
          </select>

          <div className="flex flex-1 items-center overflow-hidden rounded bg-white">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products"
              className="flex-1 px-3 py-2 text-sm text-slate-800 outline-none"
            />
            <button className="flex items-center justify-center bg-brand-accent px-3 py-2 text-sm font-medium text-white">
              <Search className="mr-1 h-4 w-4" />
              Search
            </button>
          </div>
        </div>

        {/* Right info */}
        <div className="hidden items-center gap-4 text-xs md:flex">
          <div className="flex flex-col leading-tight">
            <span className="opacity-70">Call us now</span>
            <span className="font-semibold">+011 5827918</span>
          </div>
          <Link href="#" className="hover:underline">
            Sign in
          </Link>
          <button className="font-semibold hover:underline">Cart</button>
        </div>
      </div>

      {/* Second row: nav menu */}
      <div className="border-t border-brand-darkAlt bg-brand-darkAlt">
        <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-2 text-sm">
          <button className="font-semibold">Browse By Category</button>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            Easy Monthly Installments
          </Link>
          <Link href="#" className="hover:underline">
            Shop by Brands
          </Link>
          <Link href="#" className="hover:underline">
            Become a Vendor
          </Link>
        </nav>
      </div>
    </header>
  );
}
