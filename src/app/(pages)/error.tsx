"use client";
import React from "react";
type props = {
  error: Error;
};
const ErrorPage: React.FC<props> = ({ error }) => {
  console.log(error);

  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
