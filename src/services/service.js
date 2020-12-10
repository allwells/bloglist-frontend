import axios from "axios";

const URL = "http://localhost:3003/api/blogs";

const getAll = () => {
  const req = axios.get(URL);
  return req.then((res) => res.data);
};

const create = (personObject) => {
  const req = axios.post(URL, personObject);
  return req.then((res) => res.data);
};

const update = (id, personObject) => {
  const req = axios.put(`${URL}/${id}`, personObject);
  return req.then((res) => res.data);
};

const remove = (id) => {
  const req = axios.delete(`${URL}/${id}`);
  return req.then((res) => res);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove };
