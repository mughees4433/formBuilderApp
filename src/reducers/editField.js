const editFieldReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_EDIT_FIELD":
      return action.payload;
    case "RESET_EDIT_FIELD":
      return [];
    default:
      return state;
  }
};
export default editFieldReducer;
