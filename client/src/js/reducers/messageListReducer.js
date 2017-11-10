

export default function(state=null, action){
  
  switch(action.type){
    case "UPDATE_MESSAGE_LIST":
      return action.payload;
    default:
      return state;
  }
}
