import React from "react";

const BlogForm = ({
  addBlog,
  newTitle,
  newAuthor,
  newURL,
  newLikes,
  titleChange,
  authorChange,
  urlChange,
  likesChange,
}) => {
  return (
    <div>
      <form onSubmit={addBlog}>
        <div>
          Title: <input value={newTitle} onChange={titleChange} />
        </div>
        <div>
          Author: <input value={newAuthor} onChange={authorChange} />
        </div>
        <div>
          URL: <input value={newURL} onChange={urlChange} />
        </div>
        <div>
          Likes: <input value={newLikes} onChange={likesChange} />
        </div>
        <div>
          <button type="submit">Add Blog</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
