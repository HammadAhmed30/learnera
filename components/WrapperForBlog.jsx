import React from "react";

export default function WrapperForBlog({ className, children }) {
  return (
    <div
      className={
        "w-full px-[10px] md:px-[30px] mx-auto max-w-[800px] " + className || ""
      }
    >
      {children}
    </div>
  );
}
