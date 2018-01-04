import { connect } from "react-redux";
import Movies from "../components/Movies";
import { deleteMovie } from "../actions";
import { updateMovie } from "../actions";
import movieGenres from "../movieGenres";

// The list component container should mapStateToProps for the array of things
function mapStateToProps(state) {
  return {
    movies: state.movies,
    movieGenres: movieGenres
  };
}

// The list component container should mapDispatchToProps
// for the deleteThing action
function mapDispatchToProps(dispatch) {
  return {
    deleteMovie: function (id) {
      dispatch(deleteMovie(id));
      // const action = getComment(id);
      // dispatch(action);
    },
    updateMovie: function (mov) {
      dispatch(updateMovie(mov));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
