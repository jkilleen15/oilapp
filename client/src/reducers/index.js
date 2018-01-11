import {combineReducers} from "redux";

// OILS

function oils(state = [], action) {
  if (action.type === "OILS_LOADED") {
    return action.value;
  }
  return state;
}

// SINGLE OIL

function oil(state = [], action) {
  if (action.type === "GET_OIL_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  oils, oil
});

export default rootReducer;
