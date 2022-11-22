import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFieldFromLocalStaorage } from "../../actions";
import InputField from "./input";
import "./styles.css";

function PreviewApp() {
  const [inputs, setinputs] = useState([]);
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);
  useEffect(() => {
    const fields = JSON.parse(localStorage.getItem("fields"));
    if (fields) {
      setinputs(JSON.parse(localStorage.getItem("fields")));
      dispatch(setFieldFromLocalStaorage());
    }
  }, []);
  useEffect(() => {
    setinputs(fields);
  }, [fields]);
  const appendInputs = () => {
    return inputs.map((inputField) => {
      return <InputField inputField={inputField} />;
    });
  };
  return (
    <>
      <div className="formPreview">
        <header>Form Prview</header>
        {inputs.length > 0
          ? appendInputs()
          : "Please add some fields in your form"}
      </div>
    </>
  );
}

export default PreviewApp;
