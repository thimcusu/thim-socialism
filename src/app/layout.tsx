import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
        <body className={cn("h-full bg-background font-sans antialiased", fontSans.variable, "text-gray-800")}>
          <Navbar />
          <div className="h-0 min-h-[calc(100%-74px)]">{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
