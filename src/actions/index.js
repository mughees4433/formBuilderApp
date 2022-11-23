export const setField = (value) => {
  return {
    type: "SET_FIELD",
    payload: value,
  };
};
export const updateField = (value) => {
  return {
    type: "UPDATE_FIELD",
    payload: value,
  };
};
export const clearField = () => {
  return {
    type: "CLEAR_FIELD",
  };
};
export const setFieldFromLocalStaorage = () => {
  return {
    type: "SET_FIELD_FROM_LOCAL_STORAGE",
  };
};
export const editFieldwithId = (value) => {
  return {
    type: "SET_EDIT_FIELD",
    payload: value,
  };
};
export const resetFieldtoUpdate = () => {
  return {
    type: "RESET_EDIT_FIELD",
  };
};
