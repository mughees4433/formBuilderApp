import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField, updateField, resetFieldtoUpdate } from "../../actions";
import "./styles.css";
function Form() {
  const dispatch = useDispatch();
  const [label, setLabel] = useState();
  const [type, setType] = useState("text");
  const [newOpt, setnewOpt] = useState([]);
  const fieldIDToEdit = useSelector((state) => state.fieldToEdit);
  const fields = useSelector((state) => state.fields);
  useEffect(() => {
    const fieldToEdit = fields.filter((field) => {
      return field.id == fieldIDToEdit;
    });
    if (fieldToEdit.length > 0) {
      setLabel(fieldToEdit[0].label);
      setType(fieldToEdit[0].type);
      setnewOpt(fieldToEdit[0].newOpt);
    }
  }, [fieldIDToEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fieldIDToEdit.length > 0) {
      const field = { label, type, newOpt, id: fieldIDToEdit };
      dispatch(updateField(field));
    } else {
      const id = Date.now();
      const field = { label, type, newOpt, id };
      dispatch(setField(field));
    }

    reset();
  };
  const reset = () => {
    setLabel("");
    setType("text");
    setnewOpt([]);
    dispatch(resetFieldtoUpdate());
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
        <div className="formInput">
          <label>Label </label>
          <input
            type="text"
            value={label}
            placeholder="Please enter label"
            onChange={getLabel}
            required
          />
        </div>
        <div className="formInput">
          <label>Input Type </label>
          <select value={type} onChange={getType}>
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
            <div className="formInput">
              <label>Please Enter the number of options </label>
              <input
                type="text"
                value={newOpt.length}
                placeholder="number of options "
                onChange={getOptionsNo}
                required
              />
            </div>
            {newOpt.map((opt) => {
              return (
                <div className="formInput">
                  <label>Please Enter the option</label>
                  <input
                    type="text"
                    value={opt.val}
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
          {fieldIDToEdit.length > 0 && (
            <button className="button" onClick={reset}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
