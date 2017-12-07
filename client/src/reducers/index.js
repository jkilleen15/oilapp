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

// template provided
/*
function someThing(state = "") {
  return state;
}

*/
// add newMovie, deleted movie? needed? benefit? if yes, also change value in actions
const rootReducer = combineReducers({
  movies, movie
});

export default rootReducer;
