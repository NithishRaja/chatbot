import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("START_CONVERSATION")
    .switchMap(() => {
      // send AJAX GET request to get messages
      return Rx.Observable.ajax({url:"/api/startConversation", method:"GET", responseType:"json"});
    })
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_MESSAGE_LIST", payload:response};
    });
}
