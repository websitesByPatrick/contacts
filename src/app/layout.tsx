import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts/fonts";
import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Contact Keeper",
  description: "Keep Track of your contacts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black box-border`}>
        <div className="flex flex-col items-center py-2 gap-4 w-[1280px] mx-auto">
          <Header />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
