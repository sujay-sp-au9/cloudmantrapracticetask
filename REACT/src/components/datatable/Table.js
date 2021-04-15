import React, { useState } from "react";
import Axios from "axios";
import moment from "moment";
import { Table, Space, message, Form } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Context from "../../context";

import UserCreateUpdateModal from "../UserCreateUpdateModal";

import { url } from "../../url";
import { checkEmail, isEmailValid, clearForm } from "../utils";

const TableComponent = () => {
  const [state, SetState] = React.useContext(Context);
  const { users } = state;
  const [form] = Form.useForm();
  const [visible, SetVisible] = useState(false);
  const [emailExists, SetExists] = useState(false);
  const [userUpdateEmail, SetEmail] = useState("");
  const [userUpdateId, SetID] = useState("");
  const handleOnSubmit = () => {
    const data = form.getFieldsValue();
    if (Array.isArray(data.designation)) {
      data.designation = data.designation[0];
    }
    clearForm(form);
    Axios({
      method: "PATCH",
      url: `${url}/all/user/${userUpdateId}`,
      data,
    })
      .then((res) => {
        if (res.status === 200) {
          SetState((state) => {
            return {
              ...state,
              users: [
                res.data.user,
                ...state.users.filter(
                  (userElem) => !(userElem._id === userUpdateId)
                ),
              ],
            };
          });
          SetVisible(false);
        }
      })
      .catch((err) => message.error(err.message));
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "email",
      key: "name",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Address",
      dataIndex: "location",
      key: "address",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
      render: (dob) => new Date(dob).toDateString(),
    },
    {
      render: (user) => {
        return (
          <Space size="middle">
            <EditOutlined
              onClick={() => {
                const { email, designation, location, dob, _id } = user;
                form.setFieldsValue({
                  email,
                  designation: [designation],
                  location,
                  dob: moment(dob),
                });
                SetID(_id);
                SetEmail(email);
                SetVisible(true);
              }}
            />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => {
                Axios({
                  method: "DELETE",
                  url: `${url}/all/user/${user._id}`,
                })
                  .then(
                    (res) =>
                      res.status === 200 &&
                      SetState((state) => {
                        return {
                          ...state,
                          users: state.users.filter(
                            (userElem) => !(userElem._id === user._id)
                          ),
                        };
                      })
                  )
                  .catch((err) => message.error(err.message));
              }}
            />
          </Space>
        );
      },
    },
  ];
  return (
    <div style={{ maxWidth: "100vw", overflow: "auto" }}>
      <Table
        pagination={{
          current: state.page,
          position: ["bottomLeft"],
          total: state.totalResults,
          onChange: (page) =>
            SetState((state) => {
              return { ...state, page };
            }),
        }}
        scroll={{ x: 800 }}
        dataSource={users}
        columns={columns}
      />
      <UserCreateUpdateModal
        type="Update"
        handleOnSubmit={handleOnSubmit}
        form={form}
        visible={visible}
        SetVisible={SetVisible}
        emailExists={emailExists}
        SetExists={SetExists}
        clearForm={clearForm}
        isEmailValid={isEmailValid}
        checkEmail={checkEmail}
        email={userUpdateEmail}
      />
    </div>
  );
};

export default TableComponent;
