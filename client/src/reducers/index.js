import {combineReducers} from "redux";

// MOVIES

function movies(state = [], action) {
  if (action.type === "MOVIES_LOADED") {
    return action.value;
  }
  return state;
}

// SINGLE MOVIE

function movie(state = [], action) {
  if (action.type === "GET_MOVIE_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  movies, movie
});

export default rootReducer;
