"use server";
import { auth, signIn } from "@/app/api/auth/[...nextauth]/options";
import { GoogleGenerativeAI } from "@google/generative-ai";
import BlogModel from "../models/blog.model";
import { connect } from "./dbconnection";
import { parseMarkdownFun } from "./functions/parseMarkdownFun";
// import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/users/dashboard",
    back: "/sign-in",
  });
}
export async function blogCreateAction(formData: FormData) {
  await connect();
  const user = await auth();
  if (!user) {
    throw new Error("You must be signed in to create a blog.");
  }
  const blogName = formData.get("blogTitle");
  const blogContent = formData.get("blogContent");

  if (!blogName || !blogContent) {
    throw new Error("Both blogName and blogContent are required.");
  }
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `
  Generate a blog in Markdown format based on the provided title and description. Follow this exact structure:
  
  1. **Title:** Generate an **SEO-friendly blog title**.
  2. **Content:** Write a detailed, well-structured **SEO-friendly body content** of the blog (500-1000 words). Ensure readability and engagement.
  3. **Keywords:** Provide an **array or list of SEO-friendly keywords** related to the blog content.
  4. **Category:** Suggest a single **category** that best suits the blog topic.
  5. **Tags:** Provide a list of **tags** relevant to the blog.
  6. **Meta Description:** Write an **SEO-optimized meta description** summarizing the blog.
  
  The output must strictly follow this Markdown structure:
  
  \`\`\`markdown
  # {{Title}}
  
  {{Blog Content}}
  
  ---
  
  **Keywords:**  
  - {{Keyword 1}}  
  - {{Keyword 2}}  
  - {{Keyword 3}}  
  
  **Category:**  
  {{Category}}
  
  **Tags:**  
  - {{Tag 1}}  
  - {{Tag 2}}  
  - {{Tag 3}}  
  
  **Meta Description:**  
  {{Meta Description}}
  \`\`\`
  
  **Input Example:**  
  - Title: "${blogName}"  
  - Description: "${blogContent}"
  
  Ensure the output adheres to the structure above.
  `;

  try {
    const result = await model.generateContent(prompt);
    const generatedContent = result.response.text();
    const parsedContent = parseMarkdownFun(
      generatedContent.replaceAll("```markdown", "").replaceAll("```", "")
    );
    console.log("Parsed content:", parsedContent);
    const newBlogs = await BlogModel.create({
      userId: user.user?.email,
      title: parsedContent.title,
      content: parsedContent.content,
      markdown: generatedContent,
      keywords: parsedContent.keywords,
      tags: parsedContent.tags,
      categories: parsedContent.categories,
      metaDescription: parsedContent.metaDescription,
    });
    console.log("New blog created:", newBlogs);
  } catch (error) {
    console.error("Error generating blog:", error);
    throw new Error("Failed to generate blog. Please try again.");
  }
}
