import axios from "axios";

const apiEndPoint = "https://linhtrinhviet.herokuapp.com";

const GetTodoList = () => {
  return axios.get(apiEndPoint + "/todo");
};

const AddTodo = (inputValue) => {
  const createDate = new Date().getTime();
  return axios.post(apiEndPoint + "/todo", {
    taskName: inputValue,
    createdDate: createDate,
    isCompleted: false,
    isFavorite: false,
  });
};

const EditTask = (id, value) => {
  return axios.patch(apiEndPoint + `/todo/${id}`, {
    taskName: value,
  });
};

const ChooseFavorite = (id, value) => {
  return axios.patch(apiEndPoint + `/todo/${id}`, {
    isFavorite: value,
  });
};

const ChangeStatusComplete = (id, value) => {
  return axios.patch(apiEndPoint + `/todo/${id}`, {
    isCompleted: value,
  });
};

const DeleteTask = (id) => {
  return axios.delete(apiEndPoint + `/todo/${id}`);
};

const TodoService = {
  GetTodoList,
  AddTodo,
  ChooseFavorite,
  ChangeStatusComplete,
  DeleteTask,
  EditTask
};

export default TodoService;
