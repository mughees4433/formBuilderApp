import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setField } from "../../actions";
import "./styles.css";
function Form() {
  const dispatch = useDispatch();
  const [label, setLabel] = useState();
  const [type, setType] = useState("text");
  const [newOpt, setnewOpt] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const field = { label, type, newOpt };
    dispatch(setField(field));
  };
  const getLabel = (e) => {
    setLabel(e.currentTarget.value);
  };
  const getType = (e) => {
    setType(e.currentTarget.value);
  };
  const getOptionsNo = (e) => {
    let optionsN = e.currentTarget.value;
    let op = [];
    for (let i = 0; i < optionsN; i++) {
      op.push({
        option: "",
        id: i,
      });
    }
    setnewOpt(op);
  };
  const onEnterOptionChange = (val, option) => {
    option.option = val;
    setnewOpt((current) =>
      current.map((obj) => {
        if (obj.id === option.id) {
          return { ...obj, val };
        }

        return obj;
      })
    );
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Label </label>
          <input
            type="text"
            name="uname"
            placeholder="Please enter label"
            onChange={getLabel}
            required
          />
        </div>
        <div className="input-container">
          <label>Input Type </label>
          <select onChange={getType}>
            <option selected value="text">
              Text
            </option>

            <option value="dropdown">Dropdown</option>

            <option value="radio">radio</option>

            <option value="checkbox">checkbox</option>
          </select>
        </div>
        {type !== "text" && (
          <>
            <div className="input-container">
              <label>Please Enter the number of options </label>
              <input
                type="text"
                name="uname"
                placeholder="number of options "
                onChange={getOptionsNo}
                required
              />
            </div>
            {newOpt.map((opt) => {
              return (
                <div className="input-container">
                  <label>Please Enter the option</label>
                  <input
                    type="text"
                    placeholder="number of options "
                    onChange={(e) => {
                      onEnterOptionChange(e.currentTarget.value, opt);
                    }}
                    required
                  />
                </div>
              );
            })}
          </>
        )}
        <div className="button-container">
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
}

export default Form;
