import React from "react";
import { Button, Form, message } from "antd";
import Axios from "axios";
import Context from "../context";

import UserCreateUpdateModal from "./UserCreateUpdateModal";

import { url } from "../url";
import { checkEmail, isEmailValid, clearForm } from "./utils";

const Add = () => {
  const [, SetState] = React.useContext(Context);
  const [form] = Form.useForm();
  const [visible, SetVisible] = React.useState(false);
  const [emailExists, SetExists] = React.useState(true);
  const handleOnSubmit = () => {
    const data = form.getFieldsValue();
    clearForm(form);
    Axios({
      method: "POST",
      url: `${url}/add`,
      data,
    })
      .then((res) => {
        if (res.status === 200) {
          SetState((state) => {
            return {
              ...state,
              users: [res.data.user, ...state.users],
            };
          });
          SetVisible(false);
        }
      })
      .catch((err) => message.error(err.message));
  };
  return (
    <React.Fragment>
      <Button style={{ margin: "2vh 0" }} onClick={() => SetVisible(true)}>
        Add User
      </Button>
      <UserCreateUpdateModal
        type="Add"
        handleOnSubmit={handleOnSubmit}
        form={form}
        visible={visible}
        SetVisible={SetVisible}
        emailExists={emailExists}
        SetExists={SetExists}
        clearForm={clearForm}
        isEmailValid={isEmailValid}
        checkEmail={checkEmail}
      />
    </React.Fragment>
  );
};

export default Add;
