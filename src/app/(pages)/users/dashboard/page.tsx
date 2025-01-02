import CreateBlogBtn from "@/components/buttons/CreateBlogBtn";
import { blogCreateAction } from "@/utils/actions";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-[2.8rem] font-medium text-center">
        Generate SEO-Friendly Blogs Easily
      </h1>
      <form className="space-y-10 mt-10" action={blogCreateAction}>
        <div>
          <label htmlFor="title" className="">
            Blog Title
          </label>
          <input
            name="blogTitle"
            type="text"
            id="title"
            defaultValue={"How ai works under the hood"}
            className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-green-600"
          />
        </div>
        <div>
          <label htmlFor="content" className="">
            Blog Short Description
          </label>
          <textarea
            name="blogContent"
            id="content"
            rows={4}
            defaultValue={
              "Artificial intelligence (AI) is a branch of computer science that aims to create machines that can perform tasks that require human intelligence."
            }
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-green-600"
          />
        </div>
        <div>
          <CreateBlogBtn />
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
