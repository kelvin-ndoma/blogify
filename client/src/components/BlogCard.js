function BlogCard({ blog, onDeleteBlog, onUpdateBlog }) {
    const { id, title, image, description,  author} = blog;
  
    function handleDeleteClick() {
      fetch(`/blogs/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          onDeleteBlog(id);
        }
      });
    }
  
    function handleEdit() {
      fetch(`/blogs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({handleEdit }),
      })
        .then((r) => r.json())
        .then((updatedBlog) => {
          onUpdateBlog(updatedBlog);
        });
    }
  
    return (
      <li className="card">
        <h4>{title}</h4>
        <p>Description: {description}</p>
        <img src={image} alt={title} />
        <p>Written By {author}</p>
        
          <button className="primary" onClick={handleEdit}>
            Edit Blog
          </button>
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default BlogCard;