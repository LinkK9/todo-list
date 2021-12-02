import {
  ChangeInputValueType,
  ChangeStatusCompleteValue,
  ChooseFavoriteTaskValue,
  BeginAddTodo,
  AddTodoSuccess,
  SyncError,
  GetTodoSuccess,
  ClearScreen,
  DeleteTask,
  EditTask,
} from "../ActionType";
// import { v4 as uuidv4 } from "uuid";

export const todo = (
  state = {
    taskList: [],
    newTaskName: "",
    isLoading: true,
    isError: false,
  },
  action
) => {
  switch (action.type) {
    case EditTask: {
      const idIndex = state.taskList.findIndex(task => task.id === action.payload.id)
      return{
        ...state,
        taskList: [...state.taskList.filter(val => val.id !== action.payload.id), {...state.taskList[idIndex], taskName: action.payload.value}]
      }
    }
    case DeleteTask: {
      return {
        ...state,
        taskList: [...state.taskList.filter(val => val.id !== action.payload.id)]
      }
    }
    case ClearScreen: {
      return {
        ...state,
        taskList: [],
      };
    }
    case SyncError: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GetTodoSuccess: {
      const taskListGet = action.payload.taskList;
      return {
        ...state,
        taskList: [...state.taskList, ...taskListGet],
        isLoading: false,
      };
    }
    case BeginAddTodo: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case AddTodoSuccess: {
      const newTask = {
        // id: uuidv4(),
        id: action.payload.id,
        taskName: action.payload.newTaskName,
        isCompleted: false,
        isFavorite: false,
        createdDate: new Date().getTime(),
        completedDate: "",
      };
      return {
        ...state,
        isLoading: false,
        isError: false,
        newTaskName: "",
        taskList: [...state.taskList, newTask],
      };
    }
    case ChangeInputValueType: {
      return { ...state, newTaskName: action.payload.newInputValue };
    }
    case ChangeStatusCompleteValue: {
      const newTaskList = state.taskList.map((task) =>
        task.id === action.payload.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
      return { ...state, taskList: newTaskList };
    }
    case ChooseFavoriteTaskValue: {
      const newTaskList = state.taskList.map((task) =>
        task.id === action.payload.id
          ? { ...task, isFavorite: !task.isFavorite }
          : task
      );
      return { ...state, taskList: newTaskList };
    }
    default:
      return state;
  }
};
