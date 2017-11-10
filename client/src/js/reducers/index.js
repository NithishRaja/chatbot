import {combineReducers} from "redux";
import messageList from "./messageListReducer";

const allReducers = combineReducers({
  messageList
});

export default allReducers;
