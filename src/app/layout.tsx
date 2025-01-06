import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import LogoContainer from "@/components/navbar/LogoContainer";
import SignInBtn from "@/components/buttons/SignInBtn";
import Link from "next/link";

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
      <body className={`${font.className} antialiased overflow-x-hidden`}>
        <div className="h-screen flex flex-col justify-between">
          <nav className="bg-white py-4 px-12 w-full sticky top-0 flex justify-between items-center border-b border-gray-300">
            <LogoContainer />
            <SignInBtn />
          </nav>
          {children}
          <footer className="sticky bottom-0 text-center py-4 bg-white border-t border-gray-300 flex items-center justify-center gap-4">
            <p className="text-gray-600">
              &copy; 2025 Blog AI Generator by Shubham Nanaware.
            </p>
            <p className="text-gray-600">
              <Link
                href="/privacy-policy"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link
                href="/terms-of-service"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </Link>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
