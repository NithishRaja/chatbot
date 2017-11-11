import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("NEW_MESSAGE")
    .mergeMap(action => {
      // send AJAX POST request with user input in body
      return Rx.Observable.ajax({url:"api/newMessage", method:"POST", body: {text: action.payload}});
    })
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_MESSAGE_LIST", payload:response};
    });

}
