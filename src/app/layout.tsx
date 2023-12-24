import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nail's Blog",
  description: "Nail 의 Next 블로그",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between mt-5 items-center pb-3 border-black border-b-2">
          <h1 className="text-3xl font-bold ml-20">
            <Link href="/home">Nail's Blog</Link>
          </h1>
          <nav className="mr-20 space-x-3">
            <Link href="/home">home</Link>
            <Link href="/about">about</Link>
            <Link href="/posts">posts</Link>
            <Link href="/contact">contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
