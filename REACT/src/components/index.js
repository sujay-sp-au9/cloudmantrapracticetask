import "./styles.css";
import React from "react";
import Axios from "axios";
import { message } from "antd";
import Context from "../context";
import Add from "./Add";
import Users from "./Users";

import { url } from "../url";

const App = () => {
  const [state, SetState] = React.useState({
    search: "",
    designation: [],
    dob: -1,
    page: 1,
    users: [],
    totalResults: 0,
  });
  React.useEffect(() => {
    let URL = `${url}/all`;
    if (state.search) {
      URL += `/${state.search}`;
    }
    if (state.designation.length > 0) {
      URL += "?";
      state.designation.forEach(
        (designation) => (URL += `designation=${designation}&`)
      );
      URL += `sort=${state.dob === -1 ? "-" : ""}dob`;
    } else {
      URL += `?sort=${state.dob === -1 ? "-" : ""}dob`;
    }
    URL += `&limit=10&page=${state.page}`;
    Axios({ method: "GET", url: URL })
      .then((res) => {
        if (res.status === 200) {
          SetState((state) => {
            return {
              ...state,
              users: res.data.users,
              totalResults: res.data.count,
            };
          });
        }
      })
      .catch((err) => message.error(err.message));
  }, [state.designation, state.dob, state.search, state.page]);
  return (
    <div id="app">
      <Context.Provider value={[state, SetState]}>
        <Add />
        <Users />
      </Context.Provider>
    </div>
  );
};

export default App;
