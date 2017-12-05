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
const rootReducer = combineReducers({
  movies, movie
});

export default rootReducer;

/*
import {combineReducers} from "redux";

// COMMENTS

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}

// SINGLE COMMENT

function comment(state = [], action) {
  if (action.type === "GET_COMMENT_DONE") {
    return action.value;
  }
  return state;
}

// CONTACTS

function contacts(state = [], action) {
  if (action.type === "CONTACTS_LOADED") {
    return action.value;
  }
  return state;
}

// SINGLE CONTACT

function contact(state = [], action) {
  if (action.type === "GET_CONTACT_DONE") {
    return action.value;
  }
  return state;
}

// PRODUCTS

function products(state = [], action) {
  if (action.type === "PRODUCTS_LOADED") {
    return action.value;
  }
  return state;
}

// SINGLE PRODUCT

function product(state = [], action) {
  if (action.type === "GET_PRODUCT_DONE") {
    return action.value;
  }
  return state;
}

// VEHICLES

function vehicles(state = [], action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}

// SINGLE VEHICLE

function vehicle(state = [], action) {
  if (action.type === "GET_VEHICLE_DONE") {
    return action.value;
  }
  return state;
}

// all together

const rootReducer = combineReducers({
  comments,products,vehicles,contacts,comment,product,vehicle,contact
});
export default rootReducer;

*/
