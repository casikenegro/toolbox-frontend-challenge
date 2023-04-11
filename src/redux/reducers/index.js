import { combineReducers } from "redux";
import files from "./files";

const mainReducer = combineReducers({
  files,
});

export default mainReducer;
