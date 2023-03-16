import BlogCard from "./BlogCard";

function BlogList({ blogs, onDeleteBlog, onEditBlog }) {
  return (
    <ul className="cards">
      {blogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            blog={blog}
            onDeleteBlog={onDeleteBlog}
            onEditBlog={onEditBlog}
          />
        );
      })}
    </ul>
  );
}

export default BlogList;