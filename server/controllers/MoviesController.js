import Movie from "../models/Movie";

/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/

// get everything from the db
// nothing in braces, means find everything
// ref 900 - Database, pg 22
export function listMovies(request, response) {
  Movie.find({}).exec()
  .then(movies => {
    return response.json(movies);
  });
}

// ref Mongoose Checklist, pg 11, How do we get one user/whatever?
export function showMovie(request, response) {
  // mongodb knows to look for _id, standard
  Movie.findById(request.params.id).exec()
  .then(mov => {
    return response.json(mov);
  });
}

// ref Mongoose Checklist, pg 10, Save something to the database (insert, save)
export function createMovie(request, response) {
  // we need to give Movie() an object will all the information
  // {body: "my movie"} = request.body
  const movie = new Movie(request.body);
  movie.save()
    .then(mov => {
      // returning the thing we just saved
      // a little redundant, but it now has it's db auto-created id
      // you don't need to return after saving, but standard/common practice
      return response.json(mov);
    });
}

export function deleteMovie(request, response) {
  console.log("delete movie controller reached");
  Movie.findByIdAndRemove(request.params.id).exec()
  // .then(alert("movie deleted!"))
  .then(movies => {
  // alert("movie deleted!");
    return response.json(movies);
  });
  // (alert("movie deleted!"));
}

// FUNCTIONS BELOW NOT UPDATED
/*
export function updateComment(request, response) {
  return response.json({theId: request.params.id});
}

export function removeComment(request, response) {
  return response.json(comments);
}
*/

// Alternate 'show' functions
/*
export function show(request, response) {
 return response.json({theId: request.params.id});
}

export function show(request, response) {
  const commentId = request.params.id;
 // use this id to get from a database
  comments.findById(commentId);
}

export function show(request, response) {
  const commentId = request.params.id;
 // use this id to get from a database
  comments.findById(commentId);
  const thisComment = comments.findById(commentId) || {};
  return response.json(thisComment);
}

*/
