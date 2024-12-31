// import { GoogleGenerativeAI } from "@google/generative-ai";
export default async function Home() {
  // const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");
  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  // const prompt = "Explain nextjs";
  // const result = await model.generateContent(prompt);
  // console.log("home page", result.response.text());
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
