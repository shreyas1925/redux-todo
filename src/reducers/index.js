import todoReducers from "./todoReducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
});

export default rootReducer;

// It will be helped when we have more than one reducers or slices
