import React from "react";
import StyledBlogs from "./Blogs.styled";

const Blogs = ({ filterBlog, deleteBlog }) => {
  return (
    <StyledBlogs>
      <h2>Blogs</h2>
      {filterBlog.map((blog, i) => (
        <div className="blogs" key={i}>
          <h3>{blog.title}</h3>
          <p>
            <b>Author:</b> <i>{blog.author}</i>
          </p>
          <p>
            <b>URL:</b> {blog.url}
          </p>
          <p>
            <b>Likes:</b> {blog.likes}
          </p>
          <button onClick={() => deleteBlog(blog.id, blog.title)}>
            Delete Blog
          </button>
        </div>
      ))}
    </StyledBlogs>
  );
};

export default Blogs;
