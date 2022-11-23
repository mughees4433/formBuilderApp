import setFieldReducer from "./setField";
import editFieldReducer from "./editField";
import { combineReducers, createStore } from "redux";

const allReducer = combineReducers({
  fields: setFieldReducer,
  fieldToEdit: editFieldReducer,
});

const store = createStore(allReducer);
export default store;
