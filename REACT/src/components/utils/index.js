import Axios from "axios";
import { message } from "antd";

import { url } from "../../url";

const checkEmail = (value, SetExists) => {
  Axios({
    method: "POST",
    url: `${url}/add/email`,
    data: { email: value },
  })
    .then((res) => {
      if (!res.data.exists) {
        SetExists(false);
      } else {
        message.error("E-mail already exists", [5]);
        SetExists(true);
      }
    })
    .catch((err) => message.error(err.message));
};

const isEmailValid = (value) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  );

const clearForm = (form) => {
  form.setFieldsValue({
    email: "",
    designation: null,
    location: "",
    dob: null,
  });
};

export { checkEmail, isEmailValid, clearForm };
