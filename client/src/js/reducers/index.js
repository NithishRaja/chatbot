import {combineReducers} from "redux";
import conversationStatus from "./conversationStatusReducer";

const allReducers = combineReducers({
  conversationStatus
});

export default allReducers;
