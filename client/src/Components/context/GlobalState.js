import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { useNavigate } from "react-router-dom";
const initialState = {
  employees: [],
};
console.log(initialState.employees);
const handlerequests = async () => {
  const res = await fetch("/home/", {
    method: "GET",
  });
  const res_fetch = await res
    .json()
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
  initialState.employees = initialState.employees.concat(res_fetch);
};
await handlerequests();
console.log(initialState);

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const navigate = useNavigate();
  function removeEmployee(id) {
    const handle_remove = async (id) => {
      const res = await fetch("/home/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const res_fetch = await res
        .json()
        .then((data) => {
          return data;
        })
        .catch((e) => {
          window.alert("Something went wrong");
        });
      if (res_fetch.status === 201) {
        navigate("/home/");
        window.alert(res_fetch.message);
        dispatch({
          type: "REMOVE_EMPLOYEE",
          payload: id,
        });
      } else {
        window.alert(res_fetch.error);
      }
    };
    handle_remove(id);
  }

  function addEmployee(employee) {
    const handle_add = async (employee) => {
      const res = await fetch("/home/addemployees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(employee),
      });
      const res_fetch = await res
        .json()
        .then((res_fetch) => {
          if (res_fetch.status === 201) {
            navigate("/home/");
            window.alert(res_fetch.message);
            console.log("...");

            dispatch({
              type: "ADD_EMPLOYEES",
              payload: employee,
            });
          } else {
            window.alert(res_fetch.error);
          }
        })
        .catch((e) => {
          window.alert("Something went wrong");
        });
    };
    handle_add(employee);
  }

  function editEmployee(employee) {
    const handle_edit = async (employee) => {
      const res = await fetch("/home/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(employee),
      });
      const res_fetch = await res
        .json()
        .then((res_fetch) => {
          if (res_fetch.status === 201) {
            navigate("/home/");
            window.alert(res_fetch.message);
            dispatch({
              type: "EDIT_EMPLOYEE",
              payload: employee,
            });
          } else {
            window.alert(res_fetch.error);
          }
        })
        .catch((e) => {
          window.alert("Something went wrong");
        });
    };
    handle_edit(employee);
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        removeEmployee,
        addEmployee,
        editEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
