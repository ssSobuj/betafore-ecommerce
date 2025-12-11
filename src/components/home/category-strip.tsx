// import Link from "next/link";
// import type { Category } from "@/types/category";

// interface CategoryStripProps {
//   categories: Category[];
// }

// export function CategoryStrip({ categories }: CategoryStripProps) {
//   console.log(categories);

//   return <section></section>;
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Category } from "@/types/category";

import "swiper/css";
import "swiper/css/navigation";

interface CategoryStripProps {
  categories: Category[];
}

export function CategoryStrip({ categories }: CategoryStripProps) {
  const data = [
    { id: 1, title: "Electronics", img: "/images/categories/1.png" },
    { id: 2, title: "Fashion", img: "/images/categories/2.png" },
    { id: 3, title: "Appliances", img: "/images/categories/3.png" },
    { id: 4, title: "Babies Store", img: "/images/categories/4.png" },
    { id: 5, title: "Electronics", img: "/images/categories/1.png" },
    { id: 6, title: "Fashion", img: "/images/categories/2.png" },
    { id: 7, title: "Appliances", img: "/images/categories/3.png" },
    { id: 8, title: "Babies Store", img: "/images/categories/4.png" },
  ];

  return (
    <section className="relative py-4 bg-[linear-gradient(to_bottom,#F3EDC9,#FFFFFF)]">
      <div className="px-[51px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4.2}
          navigation={{
            nextEl: ".category-next",
            prevEl: ".category-prev",
          }}
          className="category-swiper px-10"
        >
          {data.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link href="#">
                <div className="relative h-[200px] w-[272px] overflow-hidden rounded-[4px]">
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="border border-top h-px border-[#d4d4d4] mx-[51px] mt-[41px]"></div>

      {/* LEFT ARROW */}
      <button className="category-prev absolute left-0 top-1/2 -translate-y-1/2 z-1 h-[40px] w-[40px]  flex items-center justify-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={35}
          viewBox="0 0 19 35"
          fill="none"
        >
          <path
            d="M17.5 34L1 17.5L17.5 1"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button className="category-next absolute right-0 top-1/2 -translate-y-1/2 z-10 h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={35}
          viewBox="0 0 19 35"
          fill="none"
        >
          <path
            d="M1 34L17.5 17.5L1 1"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
