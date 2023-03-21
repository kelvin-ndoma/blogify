import { useEffect, useState } from "react";
import NewBlogForm from "./NewBlogForm";
import BlogList from "./BlogList";
import Search from "./Search";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingBlogId, setEditingBlogId] = useState(null);

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
    fetch(`/blogs/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const updatedBlogsArray = blogs.filter((blog) => blog.id !== id);
        setBlogs(updatedBlogsArray);
        window.location.reload(); 
      }
    });
  }
  

  function handleUpdateBlog(updatedBlog) {
    fetch(`/blogs/${updatedBlog.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((r) => r.json())
      .then((updatedBlog) => {
        const updatedBlogsArray = blogs.map((blog) =>
          blog.id === updatedBlog.id ? updatedBlog : blog
        );
        setBlogs(updatedBlogsArray);
        setEditingBlogId(null); 
      });
  }

  const displayedBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const editingBlog = blogs.find((blog) => blog.id === editingBlogId);

  return (
    <main>
     
     
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
     
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Add a Blog</h1>
      <NewBlogForm onAddBlog={handleAddBlog} />
        <h1 style={{ fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem", textAlign: "center" }}>
        Blogs Session
        </h1>

      <BlogList
        blogs={displayedBlogs}
        onDeleteBlog={handleDeleteBlog}
        onEditBlog={setEditingBlogId}
      />
      {editingBlog && (
        <div
          style={{
            background: "white",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            margin: "1rem 0",
          }}
        >
          <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Edit Blog Post</h2>
          <NewBlogForm initialBlog={editingBlog} onAddBlog={handleUpdateBlog} />
         
        </div>
         
      )}
    </main>
  );
}

export default BlogPage;
