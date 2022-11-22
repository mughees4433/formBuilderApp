export const setField = (value) => {
  return {
    type: "SET_FIELD",
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
