import React from "react";
import StyledBlogForm from "./BlogForm.styled";

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
    <StyledBlogForm>
      <h2>Add Blog</h2>
      <form onSubmit={addBlog}>
        <div className="blogInput">
          <input
            className="textField"
            value={newTitle}
            onChange={titleChange}
            placeholder="Title"
          />
        </div>
        <div className="blogInput">
          <input
            className="textField"
            value={newAuthor}
            onChange={authorChange}
            placeholder="Author"
          />
        </div>
        <div className="blogInput">
          <input
            className="textField"
            value={newURL}
            onChange={urlChange}
            placeholder="Url"
          />
        </div>
        <div className="blogInput">
          <input
            className="textField"
            value={newLikes}
            onChange={likesChange}
            placeholder="Likes"
          />
        </div>
        <div className="blogInput">
          <button className="addBlogButton" type="submit">
            Add Blog
          </button>
        </div>
      </form>
    </StyledBlogForm>
  );
};

export default BlogForm;
