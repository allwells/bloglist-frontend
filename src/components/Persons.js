import React from "react";

const Blogs = ({ filterBlog, deleteBlog }) => {
  return (
    <div>
      {filterBlog.map((blog, i) => (
        <p key={i}>
          {blog.title}: {blog.author}{" "}
          <button onClick={() => deleteBlog(blog.id, blog.name)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Blogs;
