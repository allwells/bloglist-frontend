import React from "react";

const Blogs = ({ filterBlog, deleteBlog }) => {
  return (
    <div>
      {filterBlog.map((blog, i) => (
        <div key={i}>
          <h3>{blog.title}</h3>
          <p>
            <i>{blog.author}</i>
          </p>
          <p>{blog.url}</p>
          <p>{blog.likes}</p>
          <button onClick={() => deleteBlog(blog.id, blog.title)}>
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
