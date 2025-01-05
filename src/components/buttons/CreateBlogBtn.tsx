"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const CreateBlogBtn = () => {
  const { pending, data } = useFormStatus();
  console.log("creation", data);

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-80 font-medium py-2 px-8 text-white rounded-lg bg-green-600 ${
        pending
          ? "cursor-not-allowed opacity-80 animate-pulse"
          : "cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
      }`}
    >
      {pending ? "Creating Blog..." : "Create Blog"}
    </button>
  );
};

export default CreateBlogBtn;
