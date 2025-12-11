"use client";

import { Category } from "@/types/category";
import {
  Facebook,
  Headphones,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar({ categories }: { categories?: Category[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <header className="border-b border-slate-200 text-white">
      {/* Top row */}
      <div className="flex  bg-bg-2 items-center justify-between gap-10 px-[51px] py-3 ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={132}
            height={48}
            unoptimized
          />
        </Link>

        {/* Search */}
        <div className="flex flex-1 max-w-[534px]">
          {/* Entire search bar container */}
          <div className="flex w-full overflow-hidden rounded-md bg-white ] h-10">
            {/* LEFT: CATEGORY SELECT (REAL SELECT) */}
            <div className="relative flex items-center px-3 text-[#ABA3A3] text-[14px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-transparent text-[14px] outline-none pr-6 capitalize"
              >
                <option value="all">All categories</option>

                {categories?.map((c) => (
                  <option className="capitalize " key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              {/* Custom dropdown arrow */}
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#9C9C9C"
                strokeWidth="2"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* DIVIDER */}
            <div className="w-[1px] bg-[#ABA3A3]" />

            {/* INPUT */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products"
              className="flex-1 px-3 py-2 text-[14px] text-[#9C9C9C] outline-none"
            />

            {/* RIGHT SEARCH BUTTON */}
            <button
              className="w-[43px] bg-[#B6B6B6] flex items-center justify-center"
              aria-label="Search"
            >
              <svg
                width="20"
                height="20"
                stroke="#ffffff"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="16.65" y1="16.65" x2="21" y2="21"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-[130px]"></div>

        {/* Right info */}
        <div className="flex flex-col g-1">
          <span className="text-[9px]">Call us now</span>
          <div className="flex items-center gap-1">
            <Headphones size={19} />
            <span className="text-[13px]"> +011 5827918</span>
          </div>
          <Link href="#" className="hover:underline text-[13px]">
            Sign in
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <User size={24} />
          <Heart size={24} />
          <div className="flex items-center gap-2 ">
            <span className="relative">
              {" "}
              <span className="absolute -top-3.5 left-[10] text-[15px] text-[#FDDE3B]">
                {" "}
                3
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_0_668)">
                  <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16L14.54 12L19.4 16C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_668">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Cart
          </div>
        </div>
      </div>

      {/* Second row: nav menu */}
      <div className="flex items-center justify-between  bg-bg-3 h-[49px] px-[51px]">
        <nav className=" flex items-center gap-8">
          <button className=" flex items-center gap-3 text-[17px]">
            <Menu size={16} />
            Browse By Category
          </button>
          <div className="flex items-center gap-9">
            {" "}
            <Link href="/" className="hover:underline text-[13px]">
              Home
            </Link>
            <Link href="/products" className="hover:underline text-[13px]">
              Easy Monthly Installments
            </Link>
            <Link href="/products" className="hover:underline text-[13px]">
              Shop by Brands
            </Link>
            <Link href="/products" className="hover:underline text-[13px]">
              Become a Vendor
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-6">
          <Facebook size={22} />
          <Twitter size={22} />
          <Linkedin size={22} />
          <Instagram size={22} />
        </div>
      </div>
    </header>
  );
}
