
import React, { useState } from "react";

function BlogCard({ blog, onDeleteBlog, onUpdateBlog }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [image, setImage] = useState(blog.image);
  const [author, setAuthor] = useState(blog.author);

  const { id } = blog;

  function handleDeleteClick() {
    fetch(`/blogs/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDeleteBlog(id);
      }
    });
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCancelClick() {
    setIsEditing(false);
  }

  function handleSaveClick() {
    const updatedBlog = { id, title, description, image, author };

    fetch(`/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((updatedBlog) => {
        setIsEditing(false);
        onUpdateBlog(updatedBlog);
      });
  }

  return (
    <li className="card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{title}</h4>
          <p>Description: {description}</p>
          <img src={image} alt={title} />
          <p>Written By {author}</p>

          <button className="primary" onClick={handleEditClick}>
            Edit Blog
          </button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </li>
  );
}

export default BlogCard;
