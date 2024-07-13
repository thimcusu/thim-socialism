import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thim Socialism App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <ClerkProvider>
        <body className={(inter.className, "h-full bg-slate-100 text-gray-800")}>
          <Navbar />
          <div className="h-0 min-h-[calc(100%-74px)] md:px-8 lg:px-16 xl:px-32 2xl:px-64">{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
