import { useEffect, useState } from "react";
import NewBlogForm from "./NewBlogForm";
import BlogList from "./BlogList";
import Search from "./Search";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/blogs")
      .then((res) => res.json())
      .then((blogsArray) => {
        setBlogs(blogsArray);
      });
  }, []);

  function handleAddBlog(newBlog) {
    const updatedBlogsArray = [...blogs, newBlog];
    setBlogs(updatedBlogsArray);
  }

  function handleDeleteBlog(id) {
    const updatedBlogsArray = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogsArray);
  }

  function handleUpdateBlog(updatedBlog) {
    const updatedBlogsArray = blogs.map((blog) => {
      return blog.id === updatedBlog.id ? updatedBlog : blog;
    });
    setBlogs(updatedBlogsArray);
  }

  const displayedBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewBlogForm onAddBlog={handleAddBlog} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <BlogList
        blogs={displayedBlogs}
        onDeleteBlog={handleDeleteBlog}
        onUpdateBlog={handleUpdateBlog}
      />
    </main>
  );
}

export default BlogPage;