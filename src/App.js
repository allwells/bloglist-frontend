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

  const deleteBlogs = (id, titles, authors) => {
    console.log("before alert");
    window.confirm(`Delete ${titles} by ${authors}?`);
    console.log("after alert")
      ? service
          .remove(id)
          .then((res) => {
            if (res.status === 200) {
              console.log("status code: ", res.status);
              setBlogs(blogs.filter((blog) => blog.id !== id));
              setMessageType("success");
              setMessage(`Deleted ${titles} by ${authors}`);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
            }
          })
          .catch((error) => {
            setMessageType("error");
            setMessage(
              `'${titles}' by ${authors} has already been removed from server!`
            );
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setBlogs(blogs.filter((blog) => blog.id !== id));
          })
      : console.log("Last option");
  };

  const AddBlog = (event) => {
    event.preventDefault();
    const bloglist = blogs.find(
      (blog) => blog.title.toLowerCase() === title.toLowerCase()
    );
    if (bloglist) {
      const choice = window.confirm(
        `${title} by ${author} is already added to bloglist, replace the old blog with a new one?`
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
            setMessage(`Changed ${bloglist.title} by ${bloglist.author}`);
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
          setMessage(`Added ${blog.title} by ${blog.author}`);
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
      <Blogs filterBlog={filterBlogs} deleteBlog={deleteBlogs} />
    </div>
  );
};

export default App;
