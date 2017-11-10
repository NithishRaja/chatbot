import * as messageList  from "./../../info/response.json";

export default function(state=messageList, action){
  switch(action.type){
    case "UPDATE_MESSAGE_LIST":
      return action.payload;
    default:
      return state;
  }
}
