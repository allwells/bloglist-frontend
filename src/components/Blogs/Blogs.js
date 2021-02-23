import React from "react";
import StyledBlogs from "./Blogs.styled";

const Blogs = ({ filterBlog, deleteBlog }) => {
  return (
    <StyledBlogs>
      {filterBlog.map((blog, i) => (
        <div key={i}>
          <h3>{blog.title}</h3>
          <p>
            Author: <i>{blog.author}</i>
          </p>
          <p>URL: {blog.url}</p>
          <p>Likes: {blog.likes}</p>
          <button onClick={() => deleteBlog(blog.id, blog.title)}>
            Delete Blog
          </button>
        </div>
      ))}
    </StyledBlogs>
  );
};

export default Blogs;
