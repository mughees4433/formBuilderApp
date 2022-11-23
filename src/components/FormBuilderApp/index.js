import React, { useEffect, useState } from "react";
import "./styles.css";
import Form from "./form";
import { useDispatch } from "react-redux";
import { clearField } from "../../actions";
function FormBuilderApp() {
  const [inputs, setinputs] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("fields")) {
      JSON.parse(localStorage.getItem("fields")) &&
        setinputs(JSON.parse(localStorage.getItem("fields")));
    }
  }, []);
  const dispatch = useDispatch();
  const clearLocalStorage = () => {
    dispatch(clearField());
  };
  return (
    <div className="formBuilderApp">
      <header>Welcome to the Form Builder App</header>
      <Form />
      {inputs.length > 0 && (
        <button class="button clear" onClick={clearLocalStorage}>
          Clear Form
        </button>
      )}
    </div>
  );
}

export default FormBuilderApp;
