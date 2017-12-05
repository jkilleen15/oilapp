import { connect } from "react-redux";
import MovieSingle from "../components/MovieSingle";
import { getMovie } from "../actions";

function mapStateToProps(state) {
  return {
    movie: state.movie
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovie: function (id) {
      dispatch(getMovie(id));
      // const action = getComment(id);
      // dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSingle);
