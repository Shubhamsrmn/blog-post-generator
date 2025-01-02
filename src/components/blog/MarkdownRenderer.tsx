"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
type props = {
  markdown: string;
};
const MarkdownRenderer: React.FC<props> = ({ markdown }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      className="prose"
    >
      {markdown.replaceAll("```markdown", "").replaceAll("```", "")}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
