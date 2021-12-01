import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import TaskInput from "../task-item/TaskInput";
import TodoList from "../todo-list/TodoList";
import classes from "./Home.module.css";
import { ClearTask, GetData } from "../../redux/ActionCreator";
import { useEffect } from "react";
import AppHeader from "../app-header/AppHeader";

export default function Home() {
  let taskList = useSelector((store) => store.todoState.taskList);

  const partitions = _.partition(taskList, (task) => task.isCompleted);

  const tasksCompleted = _.orderBy(partitions[0], ["createdDate"], ["desc"]);

  const newTaskValue = useSelector((store) => store.todoState.newTaskName);

  let tasksNotCompleted = _.orderBy(
    partitions[1],
    ["isFavorite", "createdDate"],
    ["desc", "desc"]
  );

  if (newTaskValue) {
    tasksNotCompleted = tasksNotCompleted.filter((t) =>
      t.taskName.includes(newTaskValue)
    );
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ClearTask());
    dispatch(GetData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader></AppHeader>
      <div className={classes.taskInputContainer}>
        <TaskInput />
      </div>
      <section className={classes.taskListContainer}>
        <TodoList taskList={tasksNotCompleted} title={"Danh sách task"} />
        <TodoList
          taskList={tasksCompleted}
          title={"Danh sách task hoàn thành"}
        />
      </section>
    </>
  );
}
