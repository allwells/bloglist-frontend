import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import service from "./services/service";
import Notification from "./components/Notification";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [likes, setLikes] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    service.getAll().then((response) => {
      setBlogs(response);
    });
  }, []);

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const authorChange = (event) => {
    setAuthor(event.target.value);
  };
  const urlChange = (event) => {
    setUrl(event.target.value);
  };
  const likesChange = (event) => {
    setLikes(event.target.value);
  };

  const filterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const filterBlogs = blogs
    ? blogs.filter((blog) =>
        blog.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : [];

  const AddBlog = (event) => {
    event.preventDefault();
    const blogObject = {
      title: title,
      author: author,
      url: url,
      likes: likes,
    };

    const check = blogs.find(
      (blog) => blog.name.toLowerCase() === title.toLowerCase()
    );

    if (check) {
      window.confirm(
        `${title} is already added to phonebook, replace old number with a new one?`
      )
        ? service
            .update(check.id, blogObject)
            .then((response) => {
              setBlogs(
                blogs.map((blog) => (blog.id !== response.id ? blog : response))
              );
              setMessageType("success");
              setMessage(`${title} has been updated`);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
            })
            .catch((error) => {
              setMessageType("error");
              setMessage(
                `Information of ${title} has already been removed from server!`
              );
              setTimeout(() => {
                setMessage(null);
              }, 5000);
              setBlogs(blogs.filter((blog) => blog.id !== check.id));
            })
        : console.log("");
    }

    service
      .create({
        title: title,
        author: author,
        url: url,
        likes: likes,
      })
      .then((response) => {
        setBlogs(blogs.concat(response));
      });
    setTitle("");
    setAuthor("");
    setUrl("");
    setLikes("");
    setMessageType("success");
    setMessage(`Added ${title}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const deleteBlogs = (id, titles) => {
    window.confirm(`Delete ${titles}?`)
      ? service
          .remove(id)
          .then((response) => {
            if (response.status === 200) {
              setBlogs(blogs.filter((blog) => blog.id !== id));
              setTitle("");
              setAuthor("");
              setUrl("");
              setLikes("");
              setMessageType("success");
              setMessage(`Deleted ${titles}`);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
            }
          })
          .catch((error) => {
            setMessageType("error");
            setMessage(
              `Information of ${titles} has already been removed from server!`
            );
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setBlogs(blogs.filter((blog) => blog.id !== id));
          })
      : console.log();
  };

  return (
    <div>
      <h2>Bloglist</h2>
      <Notification message={message} messageType={messageType} />
      <Filter newFilter={newFilter} filterChange={filterChange} />
      <h3>Add a new blog</h3>
      <BlogForm
        addBlog={AddBlog}
        newTitle={title}
        newAuthor={author}
        newURL={url}
        newLikes={likes}
        titleChange={titleChange}
        authorChange={authorChange}
        urlChange={urlChange}
        likesChange={likesChange}
      />
      <h3>Blogs</h3>
      <Blogs filterBlog={filterBlogs} deleteBlog={deleteBlogs} />
    </div>
  );
};

export default App;
