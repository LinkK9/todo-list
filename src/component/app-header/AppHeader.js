import classes from "../../App.module.css";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AttempLogout } from "../../redux/ActionCreator";
import { useHistory } from "react-router";

const AppHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
      dispatch(AttempLogout());
      history.push("/login");
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    handleLogout();
  };

  return (
    <div className={classes.appHeader}>
      <Title className={classes.header}>Todo-List!</Title>
      <Button danger className={classes.btn} onClick={showModal}>
        Logout
      </Button>
      <Modal  visible={isModalVisible} onCancel={handleCancel} onOk={handleOk} okButtonProps={{danger: true}} okText='Logout' >
        <h2>Bạn có muốn logout?</h2>
      </Modal>
    </div>
  );
};

export default AppHeader;
