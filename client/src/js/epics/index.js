import { combineEpics, createEpicMiddleware } from "redux-observable";
import startConversationEpic from "./startConversationEpic";
import newMessageEpic from "./newMessageEpic";

const allEpics = combineEpics(
  startConversationEpic,
  newMessageEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
