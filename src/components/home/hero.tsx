// export function Hero() {
//   return (
//     <section>
//       <div className="bg-[url('/images/hero.png')] bg-cover bg-center h-[318px] relative">
//         {/* Main banner */}
//         <div className="w-full px-[51px] flex h-full items-center justify-between">
//           <div className="max-w-[490px] flex flex-col gap-0.5 p-6">
//             <h1 className="text-[57px] leading-[50px]">
//               Shop
//               <span className="text-text-2">Computer &amp; experience</span>
//             </h1>
//             <p className="text-[13px] max-w-[383px]">
//               You cannot inspect quality into the product; it is already there.
//             </p>
//             <p className="text-[13px] max-w-[393px]">
//               I am not a product of my circumstances. I am a product of my
//               decisions.
//             </p>
//             <button className="max-w-fit text-[15px] bg-primary text-white px-10 py-[15px]  rounded-[5px] hover:bg-secondary  cursor-pointer">
//               View More
//             </button>
//           </div>
//         </div>
//         <div className="absolute top-10 right-36 h-[159px] w-[165px] rounded-full bg-linear-to-r from-[#FDC830] to-[#F37335] flex items-center justify-center flex-col text-white">
//           <p className="text-[47px] text-center leading-[57px]">40% OF</p>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    titlePrefix: "Shop",
    titleAccent: "Computer & experience",
    bgImage: "/images/hero.png",
  },
  {
    id: 2,
    titlePrefix: "Shop",
    titleAccent: "Computer & gadgets",
    bgImage: "/images/hero.png",
  },
  {
    id: 3,
    titlePrefix: "Shop",
    titleAccent: "Home & appliances",
    bgImage: "/images/hero.png",
  },
];

export function Hero() {
  return (
    <section>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="bg-cover bg-center h-[318px] relative"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Main banner */}
              <div className="w-full px-[51px] flex h-full items-center justify-between">
                <div className="max-w-[490px] flex flex-col gap-0.5 p-6">
                  <h1 className="text-[57px] leading-[55px] font-normal">
                    {slide.titlePrefix}{" "}
                    <span className="text-text-2">{slide.titleAccent}</span>
                  </h1>
                  <p className="text-[13px] max-w-[383px]">
                    You cannot inspect quality into the product; it is already
                    there.
                  </p>
                  <p className="text-[13px] max-w-[393px]">
                    I am not a product of my circumstances. I am a product of my
                    decisions.
                  </p>
                  <button className="max-w-fit text-[15px] bg-primary text-white px-10 py-[15px] rounded-[5px] hover:bg-secondary cursor-pointer">
                    View More
                  </button>
                </div>
              </div>

              {/* 40% OFF badge */}
              <div className="absolute top-10 right-36 h-[159px] w-[165px] rounded-full bg-gradient-to-r from-[#FDC830] to-[#F37335] flex items-center justify-center flex-col text-white">
                <p className="text-[47px] text-center leading-[57px]">
                  40% Off
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
