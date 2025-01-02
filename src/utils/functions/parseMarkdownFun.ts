export function parseMarkdownFun(markdown: string) {
  const titleRegex = /^# (.+)$/m;
  const contentRegex = /# .+\n\n([\s\S]+?)\n\n---/m;
  const keywordsRegex = /\*\*Keywords:\*\*\s*\n- (.+)(?:\n- .+)*\n/m;
  const tagsRegex = /\*\*Tags:\*\*\s*\n- (.+)(?:\n- .+)*\n/m;
  const categoryRegex = /\*\*Category:\*\*\s*(.+)$/m;
  const metaDescriptionRegex = /\*\*Meta Description:\*\*\s*(.+)$/m;

  // Extract the title
  const title = markdown.match(titleRegex)?.[1]?.trim() || "";

  // Extract the content
  const content = markdown.match(contentRegex)?.[1]?.trim() || "";

  // Extract keywords as an array
  const keywordsMatch = markdown.match(keywordsRegex);
  const keywords = keywordsMatch
    ? keywordsMatch[0]
        .split("\n")
        .slice(1) // Skip the "Keywords:" line
        .map((keyword) => keyword.replace(/^- /, "").trim())
        .filter((k) => k)
    : [];

  // Extract tags as an array
  const tagsMatch = markdown.match(tagsRegex);
  const tags = tagsMatch
    ? tagsMatch[0]
        .split("\n")
        .slice(1) // Skip the "Tags:" line
        .map((tag) => tag.replace(/^- /, "").trim())
        .filter((t) => t)
    : [];

  // Extract category
  const category = markdown.match(categoryRegex)?.[1]?.trim() || "";

  // Extract meta description
  const metaDescription =
    markdown.match(metaDescriptionRegex)?.[1]?.trim() || "";

  return {
    title,
    content,
    keywords,
    tags,
    categories: [category], // MongoDB expects an array for categories
    metaDescription,
  };
}
