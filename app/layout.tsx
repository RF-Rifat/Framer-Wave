import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Nunito_Sans({ subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Framer-Wave",
  description:
    "Framer Wave: An Animation Component Library Powered by Tailwind and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/Logo.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
