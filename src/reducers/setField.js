const setFieldReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FIELD":
      const field = action.payload;
      const newField = [...state, field];
      localStorage.setItem("fields", JSON.stringify(newField));
      return newField;
    case "UPDATE_FIELD":
      const fieldToEdit = action.payload;
      const previousField = [...state];
      debugger;
      const updatedFields = previousField.map((field) => {
        if (field.id == fieldToEdit.id) {
          debugger;
          return fieldToEdit;
        }

        return field;
      });
      debugger;
      localStorage.setItem("fields", JSON.stringify(updatedFields));
      return updatedFields;
    case "CLEAR_FIELD":
      localStorage.removeItem("fields");
      return (state = []);
    case "SET_FIELD_FROM_LOCAL_STORAGE":
      const fields = JSON.parse(localStorage.getItem("fields"));
      return fields;
    default:
      return state;
  }
};
export default setFieldReducer;
