export function Hero() {
  return (
    <section className="mx-auto mt-4 max-w-6xl px-4">
      <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
        {/* Main banner */}
        <div className="relative overflow-hidden rounded bg-gradient-to-r from-[#ffeecb] to-[#fff7df] px-8 py-10">
          <p className="text-sm font-medium text-brand-accent">Shop</p>
          <h1 className="mb-3 text-3xl font-semibold text-brand-dark">
            Computer &amp; experience
          </h1>
          <p className="mb-6 max-w-md text-xs text-slate-600">
            You cannot inspect quality into the product; it is already there. I
            am not a product of my circumstances. I am a product of my
            decisions.
          </p>
          <button className="rounded bg-brand-accent px-5 py-2 text-sm font-semibold text-white">
            View More
          </button>

          {/* Simple circular graphic */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center md:flex">
            <div className="h-32 w-32 rounded-full bg-[#ffb347]" />
          </div>
        </div>

        {/* Right promo */}
        <div className="flex flex-col items-center justify-center rounded bg-[#fff4d6]">
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute right-6 top-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff7b3b] text-center text-sm font-bold text-white">
              40% Off
            </div>
            <span className="text-sm text-slate-600">
              Secondary promotion / image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
