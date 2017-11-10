import * as messageList  from "./../../info/response.json";
import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("NEW_MESSAGE")
    .mergeMap(action => {
      console.log(action);
      return Rx.Observable.of({response: messageList});
    })
    .pluck("response")
    .map(response => {
      return {type:"UPDATE_MESSAGE_LIST", payload:response};
    });

}
