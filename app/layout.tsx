import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Atlas Premier",
  description: "Atlas Premier Knowledge Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFB]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
