import SignInBtn from "@/components/buttons/SignInBtn";
import LogoContainer from "@/components/navbar/LogoContainer";
import Image from "next/image";
import ilustation from "../../public/Wall post-amico.svg";

export default async function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <nav className="bg-white py-4 px-12 w-full sticky top-0 flex justify-between items-center border-b border-gray-300">
        <LogoContainer />
        <SignInBtn />
      </nav>

      {/* Main Content */}
      <main className="mx-auto w-[80%] py-8 flex-1 flex flex-col justify-between items-center">
        <h1 className="text-[3.2rem] font-medium text-blackText">
          Welcome to AI Blog Generator
        </h1>
        <p className="text-[2rem] text-center text-grayText mt-4">
          Transform your ideas into SEO-friendly blog posts effortlessly with
          our AI-powered tool. Input a title and short description, and let us
          generate optimized titles, engaging content, tags, keywords,
          categories, and meta descriptions tailored for better reach and
          engagement.
        </p>
        <Image
          src={ilustation}
          width={300}
          height={300}
          alt="blog post illustration"
          className="mt-8"
        />
        <section className="mt-12 text-center">
          <h2 className="text-[2.4rem] font-semibold text-blackText">
            Why Choose Us?
          </h2>
          <ul className="text-[2rem] text-grayText text-left mt-4 list-disc list-inside space-y-2">
            <li>Generate SEO-optimized blog posts in minutes.</li>
            <li>Boost visibility with smart keywords and tags.</li>
            <li>Save time with automated content creation.</li>
            <li>Perfect for bloggers, marketers, and businesses.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 text-center py-4 bg-white border-t border-gray-300">
        <p className="text-gray-600">
          &copy; 2025 Blog AI Generator by Shubham Nanaware.
        </p>
      </footer>
    </div>
  );
}
