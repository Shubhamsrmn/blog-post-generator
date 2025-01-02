import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Blog Generator",
  description:
    "Create AI-powered blogs with SEO-friendly content and titles in PDF or Excel formats. Easily include keywords, tags, and categories to enhance your content's visibility and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
