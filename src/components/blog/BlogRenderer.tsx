import React from "react";
import TagElement from "./TagElement";
type props = {
  title: string;
  content: string;
  keywords: string[];
  tags: string[];
  category: string;
  metaDescription: string;
};
const BlogRenderer: React.FC<props> = ({
  title,
  content,
  keywords,
  tags,
  category,
  metaDescription,
}) => {
  return (
    <div className="space-y-8 mb-8">
      <h1 className="text-[3.2rem] font-medium text-pretty">{title}</h1>
      <section className="text-grayText">
        {content.split("<line-break/>").map((line, index) => (
          <React.Fragment key={index}>
            <p className="mb-6 font-normal">
              {line.split(/(\*\*.*?\*\*)/g).map((part, index) =>
                part.startsWith("**") && part.endsWith("**") ? (
                  <strong key={index} className="font-semibold">
                    {part.slice(2, -2)}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          </React.Fragment>
        ))}
      </section>
      <div className="">
        <h3 className="font-medium mb-2">Meta Description</h3>
        <p className="text-grayText font-normal">{metaDescription}</p>
      </div>
      <div className="">
        <h3 className="font-medium mb-2">Category</h3>
        <TagElement text={category} />
      </div>
      <div className="">
        <h3 className="font-medium mb-2">Tags</h3>
        <div className="flex flex-wrap items-center gap-4">
          {tags.slice(1).map((tag, index) => (
            <TagElement key={index} text={tag} />
          ))}
        </div>
      </div>

      <div className="">
        <h3 className="font-medium mb-2">Keywords</h3>
        <div className="flex flex-wrap items-center gap-4">
          {keywords.slice(1).map((keyword, index) => (
            <TagElement key={index} text={keyword} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogRenderer;
