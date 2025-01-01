import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";
import { Heading } from "@/components/Heading";
import { Navbar } from "@/components/Navbar";

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
      <body
        className={`${roboto.className} bg-zinc-950 text-zinc-100 min-h-screen`}
      >
        <Heading />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
