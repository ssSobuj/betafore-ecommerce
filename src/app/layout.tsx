import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import localFont from "next/font/local";
import { getCategories } from "@/actions/products";

const centuryGothic = localFont({
  src: [
    {
      path: "../../public/fonts/centurygothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/centurygothic_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Winstore – E-commerce Assessment",
  description: "Frontend assessment implementation using Next.js App Router",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories(); // SERVER FETCH

  return (
    <html lang="en" className={centuryGothic.className}>
      <body className="bg-bg text-text ">
        <div className="mx-auto flex min-h-screen w-full  flex-col">
          <Navbar categories={categories} />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
