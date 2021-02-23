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
    </StyledBlogForm>
  );
};

export default BlogForm;
