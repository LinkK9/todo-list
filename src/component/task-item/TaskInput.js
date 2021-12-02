import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeInputValue, AddNewTaskAsync } from "../../redux/ActionCreator";
import { useFocus } from "../../utils/useFocus";

function TaskInput() {
  const dispatch = useDispatch();

  const inputValue = useSelector((store) => store.todoState.newTaskName);

  const inputRef = useFocus();

  const handlePressEnter = () => {
    if (inputValue === "") {
      return;
    }

    dispatch(AddNewTaskAsync(inputValue));
  };

  const handleOnChange = (e) => {
    dispatch(ChangeInputValue(e.target.value));
  };

  return (
    <Input
      ref={inputRef}
      placeholder="Nhập tên task rồi ấn enter"
      value={inputValue}
      onChange={handleOnChange}
      onPressEnter={handlePressEnter}
    />
  );
}

export default TaskInput;
