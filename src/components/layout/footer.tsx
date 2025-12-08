export function Footer() {
  return (
    <footer className="mt-10 bg-[#222] text-sm text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        {/* Column 1 */}
        <div>
          <h3 className="mb-2 text-base font-semibold">WINstore</h3>
          <p className="mb-2 opacity-80">Got questions? Call us 24/7!</p>
          <p className="opacity-80">03 111 666 144</p>
          <p className="opacity-80">0317 1777015</p>
          <p className="mt-2 opacity-80">info@winstore.pk</p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="mb-2 text-base font-semibold">Trending</h4>
          <ul className="space-y-1 opacity-80">
            <li>Installments</li>
            <li>Electronics</li>
            <li>Grocery</li>
            <li>Health &amp; Beauty</li>
            <li>Home Appliances</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="mb-2 text-base font-semibold">Information</h4>
          <ul className="space-y-1 opacity-80">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shipping &amp; Return</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="mb-2 text-base font-semibold">Customer Care</h4>
          <ul className="space-y-1 opacity-80">
            <li>My Account</li>
            <li>Track Your Order</li>
            <li>Recently Viewed</li>
            <li>Wishlist</li>
            <li>Become a Vendor</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#333]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs opacity-70">
          <span>© 2021 Winstore. All Rights Reserved.</span>
          <span>VISA · MasterCard · Cash On Delivery</span>
        </div>
      </div>
    </footer>
  );
}
