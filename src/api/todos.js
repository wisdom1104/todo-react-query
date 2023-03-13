import axios from "axios";

// 모든 todos를 가져오는 api
const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  return response.data;
};

const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

const removeTodo = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};

const completTodo = async (payload) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${payload.id}`, {
    isDone: payload.isDone,
  });
};

const editTodo = async (payload) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${payload.id}`, {
    title: payload.title,
    content: payload.content,
  });
};

export { getTodos, addTodo, removeTodo, completTodo, editTodo };
