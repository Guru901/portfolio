import type { Metadata } from "next";
import { Archivo_Narrow } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Narrow({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurvinder Singh",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>{children}</body>
    </html>
  );
}
