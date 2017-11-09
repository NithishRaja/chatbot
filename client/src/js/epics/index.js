import { combineEpics, createEpicMiddleware } from "redux-observable";

const allEpics = combineEpics(
  
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
