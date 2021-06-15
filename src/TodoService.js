import axios from "axios";

const apiEndPoint = "https://linhtrinhviet.herokuapp.com";

const GetTodoList = () => {
  return axios.get(apiEndPoint + "/todo");
};

const AddTodo = (inputValue) => {
  const createDate = new Date();
  return axios.post(apiEndPoint + "/todo", {
    taskName: inputValue,
    createdDate: createDate,
    isCompleted: false,
    isFavourite: false,
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

const TodoService = {
  GetTodoList,
  AddTodo,
  ChooseFavorite,
  ChangeStatusComplete,
};

export default TodoService;
