"use client";
import { blogCreateAction } from "@/utils/actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface Errors {
  blogTitle?: string;
  blogContent?: string;
}

const CreateBlogForm = () => {
  const router = useRouter();
  const [blogTitle, setBlogTitle] = useState<string>("");
  const [blogContent, setBlogContent] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateField = (field: string, value: string): void => {
    const newErrors = { ...errors };

    if (field === "blogTitle") {
      const wordCount = value.trim().split(/\s+/).length;
      if (!value.trim()) {
        newErrors.blogTitle = "Blog title is required.";
      } else if (wordCount < 5) {
        newErrors.blogTitle = "Blog title must have at least 5 words.";
      } else {
        delete newErrors.blogTitle;
      }
    }

    if (field === "blogContent") {
      const sentenceCount = value
        .trim()
        .split(/[.!?]+/)
        .filter(Boolean).length;
      if (!value.trim()) {
        newErrors.blogContent = "Blog short description is required.";
      } else if (sentenceCount < 1) {
        newErrors.blogContent = "Description must have at least 1 sentence.";
      } else {
        delete newErrors.blogContent;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = (): boolean => {
    validateField("blogTitle", blogTitle);
    validateField("blogContent", blogContent);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const result = await blogCreateAction(blogTitle, blogContent);
        if (result.data === null) {
          toast.error(result.message || "Failed to create blog.");
        }
        if (result.data) {
          setBlogTitle("");
          setBlogContent("");
          setErrors({});
          router.push(`/users/blog/${result.data.blogId}`);
          toast.success(result.message || "Blog is successfully created");
        }
      } catch (error) {
        alert("Failed to submit the form.");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title" className="">
          Blog Title
        </label>
        <input
          name="blogTitle"
          type="text"
          id="title"
          value={blogTitle}
          onChange={(e) => {
            setBlogTitle(e.target.value);
            validateField("blogTitle", e.target.value);
          }}
          placeholder="Enter Blog Title Here..."
          className={`w-full py-2 px-4 mt-2 border ${
            errors.blogTitle
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-green-600"
          } rounded-lg outline-none focus:ring-1`}
          aria-invalid={!!errors.blogTitle}
          aria-describedby="blogTitleError"
        />
        <p
          id="blogTitleError"
          className={`${
            errors.blogTitle ? "opacity-100" : "opacity-0"
          } text-red-500 text-[1.2rem] h-8 mt-1`}
        >
          {errors.blogTitle}
        </p>
      </div>

      <div>
        <label htmlFor="content" className="">
          Blog Short Description
        </label>
        <textarea
          name="blogContent"
          id="content"
          rows={4}
          value={blogContent}
          onChange={(e) => {
            setBlogContent(e.target.value);
            validateField("blogContent", e.target.value);
          }}
          placeholder="Write a short detailed description of the blog content here..."
          className={`w-full p-4 mt-2 border ${
            errors.blogContent
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-green-600"
          } rounded-lg outline-none focus:ring-1`}
          aria-invalid={!!errors.blogContent}
          aria-describedby="blogContentError"
        />

        <p
          id="blogContentError"
          className={`${
            errors.blogContent ? "opacity-100" : "opacity-0"
          } text-red-500 text-[1.2rem] h-8 mt-1`}
        >
          {errors.blogContent}
        </p>
      </div>

      <div>
        <button
          type="submit"
          className={`w-80 font-medium bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Blog..." : "Create Blog"}
        </button>
      </div>
    </form>
  );
};

export default CreateBlogForm;
