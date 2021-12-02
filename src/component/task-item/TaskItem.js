import React, { useRef, useState } from "react";
import { Checkbox, Modal, Input, Button } from "antd";
import classes from "./TaskItem.module.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { DeleteTaskAsync, EditTaskAsync } from "../../redux/ActionCreator";


const {TextArea} = Input;

function TaskItem({
  taskItem,
  onChooseFavoriteTask,
  onCompletionStageChanged,
}) {
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState(taskItem.taskName);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setIsModalVisible(false);
    onCompletionStageChanged(taskItem.id, !taskItem.isCompleted);
  };

  const handleFavStatus = (e) => {
    e.stopPropagation();
    onChooseFavoriteTask(taskItem.id, !taskItem.isFavorite);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
    inputRef.current?.focus();
    }, 10);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteTask = () => {
    dispatch(DeleteTaskAsync(taskItem.id));
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSuccess = () => {
    dispatch(EditTaskAsync(taskItem.id, editValue));
    setIsModalVisible(false);
  };

  const starStyle = {
    on: {
      color: "orange",
      float: "right",
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translate(0, -50%)",
    },
    off: {
      color: "gainsboro",
      float: "right",
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translate(0, -50%)",
    },
  };

  return (
    <>
      <div onClick={showModal} className={classes.todoContainer}>
        <Checkbox
          id={taskItem.id}
          className={classes.tickBox}
          onChange={handleChange}
          checked={taskItem.isCompleted}
        ></Checkbox>
        <div 
          className={
            taskItem.isCompleted ? classes.completed : classes.notCompleted
          }
        >
          {taskItem.taskName}
        </div>

        {taskItem.isCompleted ? null : (
          <AiFillStar
            onClick={handleFavStatus}
            style={taskItem.isFavorite ? starStyle.on : starStyle.off}
          />
        )}
      </div>
      <Modal
        title="Edit Task"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" block danger onClick={handleDeleteTask}>
            Delete Task
          </Button>,
        ]}
      >
        <TextArea
          ref={inputRef}
          onChange={handleEditChange}
          value={editValue}
          onPressEnter={handleEditSuccess}
          autoSize={ {minRows: 1, maxRows: 6} }
          allowClear
        ></TextArea>
      </Modal>
    </>
  );
}

export default TaskItem;
