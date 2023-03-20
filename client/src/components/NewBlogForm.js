import { useState } from "react";
import './NewBlogForm.css';

function NewBlogForm({ onAddBlog }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        image: image,
        author: author
      }),
    })
      .then((res) => res.json())
      .then((newBlog) => onAddBlog(newBlog));

    setTitle("");
    setImage("");
    setDescription("");
    setAuthor("");
  }

  return (
    <div className="new-blog-form">
      <h2 className="form-title">New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a title for your blog"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter an image URL for your blog"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">Describe Blog:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter the description for your blog"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">Written by:</label>
          <textarea
            id="author"
            name="author"
            placeholder="Enter the Author of the blog"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit-btn">Add Blog</button>
      </form>
    </div>
  );
}

export default NewBlogForm;
