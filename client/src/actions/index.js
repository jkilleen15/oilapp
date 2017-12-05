// MOVIES

export function loadMovies() {
  return function (dispatch) {
    fetch("/movies")
    .then( (response) => {
      return response.json();
    }).then((movies) => {
      dispatch(moviesLoaded(movies));
    });
  };
}
function moviesLoaded(movies) {
  return {
    type: "MOVIES_LOADED",
    value: movies
  };
}

// SINGLE MOVIE

export function createMovie(m) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(m)
    }).then(() => dispatch(loadMovies()));
  };
}

export function getMovie(id) {
  return function (dispatch) {
    fetch(`/movies/${id}`)
    .then( (response) => {
      return response.json();
    }).then((movie) => {
      dispatch(getMovieDone(movie));
    });
  };
}

function getMovieDone(movie) {
  return {
    type: "GET_MOVIE_DONE",
    value: movie
  };
}
// //
/*
export function createMovie(movie) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie)
    }).then(() => dispatch(loadMovies()));
  };
}

export function getMovie(id) {
  return function (dispatch) {
    fetch(`/movies/${id}`)
    .then( (response) => {
      return response.json();
    }).then((movie) => {
      dispatch(getMovieDone(movie));
    });
  };
}

function getMovieDone(movie) {
  return {
    type: "GET_COMMENT_DONE",
    value: movie
  };
}
*/

/*
// COMMENTS

export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
    .then( (response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
}
function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

// COMMENT SINGLE

export function createComment(comment) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(comment)
    }).then(() => dispatch(loadComments()));
  };
}

export function getComment(id) {
  return function (dispatch) {
    fetch(`/comments/${id}`)
    .then( (response) => {
      return response.json();
    }).then((comment) => {
      dispatch(getCommentDone(comment));
    });
  };
}

function getCommentDone(comment) {
  return {
    type: "GET_COMMENT_DONE",
    value: comment
  };
}

// CONTACTS

export function loadContacts() {
  return function (dispatch) {
    fetch("/contacts")
    .then( (response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsLoaded(contacts));
    });
  };
}

function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

// CONTACT SINGLE

export function createContact(c) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadContacts()));
  };
}

export function getContact(id) {
  return function (dispatch) {
    fetch(`/contacts/${id}`)
    .then( (response) => {
      return response.json();
    }).then((contact) => {
      dispatch(getContactDone(contact));
    });
  };
}

function getContactDone(contact) {
  return {
    type: "GET_CONTACT_DONE",
    value: contact
  };
}

// PRODUCTS

export function loadProducts() {
  return function (dispatch) {
    fetch("/products")
    .then( (response) => {
      return response.json();
    }).then((products) => {
      dispatch(productsLoaded(products));
    });
  };
}

function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

// PRODUCT SINGLE

export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}

export function getProduct(id) {
  return function (dispatch) {
    fetch(`/products/${id}`)
    .then( (response) => {
      return response.json();
    }).then((product) => {
      dispatch(getProductDone(product));
    });
  };
}

function getProductDone(product) {
  return {
    type: "GET_PRODUCT_DONE",
    value: product
  };
}

// VEHICLES

export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles")
    .then( (response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}

function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

// VEHICLE SINGLE

export function createVehicle(v) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}

export function getVehicle(id) {
  return function (dispatch) {
    fetch(`/vehicles/${id}`)
    .then( (response) => {
      return response.json();
    }).then((vehicle) => {
      dispatch(getVehicleDone(vehicle));
    });
  };
}

function getVehicleDone(vehicle) {
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicle
  };
}

*/
