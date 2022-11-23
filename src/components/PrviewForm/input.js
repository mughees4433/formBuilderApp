import React from "react";
import { useDispatch } from "react-redux";
import { editFieldwithId } from "../../actions";
const InputField = (props) => {
  const dispatch = useDispatch();
  const inputFieldData = props.inputField;
  const editForm = (e) => {
    e.stopPropagation();
    dispatch(editFieldwithId(e.currentTarget.id));
  };
  return (
    <div className="inputForm" onClick={editForm} id={inputFieldData.id}>
      <form>
        <div className="input-container">
          <label>{inputFieldData.label} </label>
          {inputFieldData.type === "text" ? (
            <input
              type="text"
              placeholder="Please enter the value"
              required
              className="textInput"
            />
          ) : inputFieldData.type === "dropdown" ? (
            <select>
              {inputFieldData.newOpt.map((option) => {
                return <option> {option.val}</option>;
              })}
            </select>
          ) : inputFieldData.type === "radioButton" || "checkBox" ? (
            <>
              {inputFieldData.newOpt.map((option) => {
                return (
                  <>
                    <input
                      type={inputFieldData.type}
                      id={option.val}
                      name={option.val}
                      value={option.val}
                    />
                    <label for="html">{option.val}</label>
                    <br></br>
                  </>
                );
              })}
            </>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default InputField;
