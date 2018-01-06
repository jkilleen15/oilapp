import { connect } from "react-redux";
import UpdateMovieListing from "../components/UpdateMovieListing";
import { updateMovie } from "../actions";

function mapStateToProps(state) {
  return {
    movie: state.movie,
    // selectedOption: state.movie.selectedOption,
    // movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateMovie: function (mov) {
      dispatch(updateMovie(mov));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateMovieListing);
