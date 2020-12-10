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
          <input
            value={newTitle}
            onChange={titleChange}
            placeholder="Blog title"
          />
        </div>
        <div>
          <input
            value={newAuthor}
            onChange={authorChange}
            placeholder="Author"
          />
        </div>
        <div>
          <input value={newURL} onChange={urlChange} placeholder="Url" />
        </div>
        <div>
          <input value={newLikes} onChange={likesChange} placeholder="Likes" />
        </div>
        <div>
          <button type="submit">Add Blog</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
