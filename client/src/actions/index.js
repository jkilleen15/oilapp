// MOVIES
/*
X Create actions for loading your models and models loaded
    X loadThings() - do a fetch get to “/things”
    X thingsLoaded(things) - THINGS_LOADED
*/

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
/*
X Create an action for saving a new model
    X createThing(thing) - do a fetch post to “/things”
    X when the fetch is complete, dispatch to loadThings
*/

export function createMovie(m) {
  return function (dispatch) {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(m)
  //  }).then(() => dispatch(loadMovies()));
    }).then(() => dispatch(createMovieDone()))
    .then(() => dispatch(loadMovies()));
  };
}

function createMovieDone(newMovie) {
  alert('new movie added!')
  return {
    type: "CREATE_MOVIE_DONE",
    value: newMovie
  };
}

// ////////

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

// Create an action for updating an item

export function updateMovie(m) {
  console.log("update movie reached");
  console.log("movie id: " + m.id);
  return function (dispatch) {
    fetch("/movies/" + m.id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(m)
    })
    .then(() => dispatch(updateMovieDone()))
    .then(() => dispatch(loadMovies()));
  };
}

function updateMovieDone(updatedMovie) {
  alert("movie listing updated!")
  return {
    type: "UPDATE_MOVIE_DONE",
    value: updatedMovie
  };
}


/*
* Create an action for deleting an item
    * deleteThing(id) - do a fetch delete to “/things/” + id
    * when the fetch is complete, dispatch to loadThings

*/

export function deleteMovie(id) {
  console.log("delete movie reached");
  console.log("id: " + id);
  return function (dispatch) {
    fetch(`/movies/${id}`, {
      method: "DELETE"
    })
     .then(console.log("fetch complete"))
     .then(() => dispatch(loadMovies()))
     .then(() => dispatch(deleteMovieDone()));
  };
}
// function getMovieDone(movie) {
function deleteMovieDone() {
  // alert("movie deleted!");
  console.log("movie deleted!");
  return {
    type: "DELETE_MOVIE_DONE",
  };
}
