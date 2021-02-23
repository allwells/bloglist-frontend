import React, { useState, useEffect } from "react";
import Filter from "./components/Filter/Filter";
import Blogs from "./components/Blogs/Blogs";
import BlogForm from "./components/BlogForm/BlogForm";
import service from "./services/service";
import Notification from "./components/Notification/Notification";

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
        blog.author.toLowerCase().includes(newFilter.toLowerCase())
      )
    : [];

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

  const AddBlog = (event) => {
    event.preventDefault();
    const bloglist = blogs.find(
      (blog) => blog.title.toLowerCase() === title.toLowerCase()
    );
    if (bloglist) {
      const choice = window.confirm(
        `${title} is already added to phonebook, replace the old number with a new one?`
      );
      if (choice) {
        service
          .update(bloglist.id, {
            title: title,
            author: author,
            url: url,
            likes: likes,
          })
          .then((res) => {
            setBlogs(blogs.map((blog) => (blog.id !== res.id ? blog : res)));
            setMessageType("success");
            setMessage(`Changed ${bloglist.title}`);
          })
          .catch((err) => console.log(err));
      }
    } else {
      service
        .create({
          title: title.trim(),
          author: author.trim(),
          url: url.trim(),
          likes: likes.trim(),
        })
        .then((blog) => {
          setBlogs([...blogs, blog]);
          setMessageType("success");
          setMessage(`Added ${blog.title}`);
        })
        .catch((err) => {
          setMessageType("error");
          setMessage(`${err.response.data.error}`);
        });
    }
    setTitle("");
    setAuthor("");
    setUrl("");
    setLikes("");

    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div className="mainLayout">
      <h1 className="mainHeading">Blog List</h1>
      <Notification message={message} messageType={messageType} />
      <Filter newFilter={newFilter} filterChange={filterChange} />
      <h2>Add a new blog</h2>
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
      <h2>Blogs</h2>
      <Blogs filterBlog={filterBlogs} deleteBlog={deleteBlogs} />
    </div>
  );
};

export default App;
