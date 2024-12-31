import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700","900"],
  display: "swap",
  style: ["normal","italic"],
});



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
        className={`${roboto.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
