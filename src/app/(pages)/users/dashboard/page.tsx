import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-[2.8rem] font-medium text-center text-blackText">
        Generate SEO-Friendly Blogs Easily
      </h1>
      <form>
        <div>
          <label htmlFor="title" className="text-blackText">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="text-blackText">
            Content
          </label>
          <textarea
            id="content"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
