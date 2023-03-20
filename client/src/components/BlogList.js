
import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs, onDeleteBlog, onUpdateBlog }) {
  return (
    <ul className="cards">
      {blogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            blog={blog}
            onDeleteBlog={onDeleteBlog}
            onUpdateBlog={onUpdateBlog}
          />
        );
      })}
    </ul>
  );
}

export default BlogList;
