import { connect } from "react-redux";
import SearchListShow from "../components/SearchListShow";
// import { deleteMovie } from "../actions";
import { updateMovie } from "../actions";
// import movieGenres from "../movieGenres";

// The list component container should mapStateToProps for the array of things
function mapStateToProps(state) {
  return {
    movies: state.movies,
    movie: state.movie,
  //  movieGenres: movieGenres
  };
}

// The list component container should mapDispatchToProps
// for the deleteThing action
function mapDispatchToProps(dispatch) {
  return {
    updateMovie: function (mov) {
      dispatch(updateMovie(mov));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchListShow);
