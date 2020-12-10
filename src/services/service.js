import axios from "axios";

const URL = "http://localhost:3001/blogs";

const getAll = () => {
  const req = axios.get(URL);
  return req.then((res) => res.data);
};

const create = (blogObject) => {
  const req = axios.post(URL, blogObject);
  return req.then((res) => res.data);
};

const update = (id, blogObject) => {
  const req = axios.put(`${URL}/${id}`, blogObject);
  return req.then((res) => res.data);
};

const remove = (id) => {
  const req = axios.delete(`${URL}/${id}`);
  return req.then((res) => res);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove };
