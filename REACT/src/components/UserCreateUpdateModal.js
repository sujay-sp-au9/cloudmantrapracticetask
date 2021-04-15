import React from "react";
import {
  Modal,
  Typography,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
} from "antd";
import { CloseOutlined, ClearOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

const UserCreateUpdateModal = ({
  type,
  form,
  visible,
  SetVisible,
  emailExists,
  SetExists,
  clearForm,
  isEmailValid,
  checkEmail,
  handleOnSubmit,
  email,
}) => {
  return (
    <Modal
      footer={null}
      visible={visible}
      closeIcon={
        <React.Fragment>
          <ClearOutlined onClick={() => clearForm(form)} />
          <CloseOutlined
            style={{ marginLeft: "1vw" }}
            onClick={() => SetVisible(false)}
          />
        </React.Fragment>
      }
      centered
    >
      <Title level={3}>Add user</Title>
      <Form form={form} onFinish={handleOnSubmit} layout="vertical">
        <Form.Item
          onChange={(e) => {
            if (isEmailValid(e.target.value)) {
              if (type === "Update") {
                if (!(email === e.target.value)) {
                  checkEmail(e.target.value, SetExists);
                } else {
                  SetExists(false);
                }
              } else {
                checkEmail(e.target.value, SetExists);
              }
            }
          }}
          shouldUpdate={true}
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: "Please Enter your E-mail",
            },
            () => ({
              validator(rule, value) {
                if (isEmailValid(value)) {
                  return Promise.resolve();
                } else if (value.length > 0) {
                  return Promise.reject("Invalid E-mail");
                } else {
                  return Promise.reject();
                }
              },
            }),
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          label="Designation"
          name="designation"
          rules={[{ required: true, message: "Please Select a Designation" }]}
        >
          <Select defaultValue={null} style={{ width: "100%" }}>
            <Option value="SDE">SDE</Option>
            <Option value="MGR">MGR</Option>
            <Option value="SSDE">SSDE</Option>
            <Option value="SMGR">SMGR</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please confirm your location",
            },
          ]}
        >
          <Input placeholder="Location" />
        </Form.Item>
        <Form.Item
          label="Date of birth"
          name="dob"
          rules={[
            {
              required: true,
              message: "Please confirm your date of birth",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: "100%" }}
            onClick={() => SetVisible(false)}
            type="primary"
            danger
          >
            Cancel
          </Button>
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => {
            return (
              <Button
                type="primary"
                htmlType="submit"
                block
                disabled={
                  (type === "Add" ? !form.isFieldsTouched(true) : false) ||
                  form.getFieldsError().filter(({ errors }) => errors.length)
                    .length ||
                  emailExists
                }
                size="large"
              >
                {type}
              </Button>
            );
          }}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserCreateUpdateModal;
