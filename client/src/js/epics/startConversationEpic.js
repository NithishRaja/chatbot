import * as messageList  from "./../../info/response.json";
import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("START_CONVERSATION")
    .switchMap(() => {
      return Rx.Observable.of({response: messageList});
    })
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_MESSAGE_LIST", payload:response};
    });
}
