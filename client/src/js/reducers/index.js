import {combineReducers} from "redux";
import conversationStatus from "./conversationStatusReducer";
import messageList from "./messageListReducer";
const allReducers = combineReducers({
  conversationStatus,
  messageList
});

export default allReducers;
