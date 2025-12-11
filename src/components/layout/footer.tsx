import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-10 bg-[#222] text-sm text-white">
      <div className=" grid gap-[172px] px-26.5 pt-14 md:grid-cols-4">
        {/* Column 1 */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={132}
            height={48}
            unoptimized
            className="mb-3.5"
          />
          <p className="mb-3.5 text-[#00CAD7] text-[18px] whitespace-nowrap">
            Got questions? Call us 24/7!
          </p>
          <p className=" text-[13px]">03 111 666 144</p>
          <p className=" text-[13px] mb-3.5">0317 1777015</p>
          <p className="text-[18px] text-[#00CAD7] mb-0">Contact Info</p>
          <p className="text-[15px] mb-3.5">info@winstore.pk</p>
          <div className="flex items-center gap-6">
            <Facebook size={22} />
            <Twitter size={22} />
            <Linkedin size={22} />
            <Instagram size={22} />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="mb-5.5 text-[#00CAD7] text-[20px]">Trending</h4>
          <ul className="space-y-3">
            <li>Installments</li>
            <li>Electronics</li>
            <li>Grocery</li>
            <li>Health &amp; Beauty</li>
            <li>Home Appliances</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="mb-5.5 text-[#00CAD7] text-[20px]">Information</h4>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shipping &amp; Return</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="mb-5.5 text-[#00CAD7] text-[20px]">Customer Care</h4>
          <ul className="space-y-3">
            <li>My Account</li>
            <li>Track Your Order</li>
            <li>Recently Viewed</li>
            <li>Wishlist</li>
            <li>Become a Vendor</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end px-26.5 pb-14 ">
        <div className="flex items-center gap-[11px]">
          <Image
            src="/images/payment/1.png"
            alt="Payment Methods"
            width={97}
            height={55}
            unoptimized
          />
          <Image
            src="/images/payment/2.png"
            alt="Payment Methods"
            width={97}
            height={55}
            unoptimized
          />
          <Image
            src="/images/payment/3.png"
            alt="Payment Methods"
            width={97}
            height={55}
            unoptimized
          />
          <Image
            src="/images/payment/4.png"
            alt="Payment Methods"
            width={97}
            height={55}
            unoptimized
          />
        </div>
      </div>

      <div className="bg-bg-footer-2 px-26.5">
        <div className="flex  items-center justify-between py-5 ">
          <span className="text-[17px]">
            © 2021 Winstore. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
