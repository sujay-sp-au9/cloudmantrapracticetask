import React from "react";
import { Input, Checkbox, Radio } from "antd";
import Context from "../../context";

const { Search } = Input;

const designations = ["SDE", "SSDE", "MGR", "SMGR"];

const Options = () => {
  const [sort, setSort] = React.useState(1);
  const [state, SetState] = React.useContext(Context);
  const [debouncedSearch, SetDebouncedSearch] = React.useState(state.search);
  React.useEffect(() => {
    const timerID = setTimeout(() => {
      SetState((state) => {
        return {
          ...state,
          search: debouncedSearch,
          page: 1,
        };
      });
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);
  return (
    <div>
      <Search
        style={{ marginBottom: "1vh" }}
        placeholder="Search by username"
        onChange={(e) => SetDebouncedSearch(e.target.value)}
      />
      <div style={{ marginBottom: "1vh" }}>
        <span style={{ marginRight: "1vw" }}>Filter by designation</span>
        <Checkbox.Group
          options={designations}
          onChange={(designation) =>
            SetState((state) => {
              return {
                ...state,
                designation,
                page: 1,
              };
            })
          }
        />
      </div>
      <div style={{ marginBottom: "1vh" }}>
        <span style={{ marginRight: "1vw" }}>Sort by</span>
        <Radio.Group
          onChange={(e) => {
            setSort(e.target.value);
            if (e.target.value === 2) {
              SetState((state) => {
                return {
                  ...state,
                  dob: 1,
                };
              });
            } else if (e.target.value === 1) {
              SetState((state) => {
                return {
                  ...state,
                  dob: -1,
                };
              });
            }
          }}
          value={sort}
        >
          <Radio value={1}>Youngest</Radio>
          <Radio value={2}>Experienced</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default Options;
