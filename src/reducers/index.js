import setFieldReducer from "./setField";
import { combineReducers, createStore } from "redux";

const allReducer = combineReducers({
  fields: setFieldReducer,
});

const store = createStore(allReducer);
export default store;
