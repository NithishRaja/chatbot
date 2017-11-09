
export default function(state=false, action){

  switch(action.type){
    case "UPDATE_CONVERSATION_STATUS":
      return action.payload;
    default:
      return state;
  }
}
