import { connect } from "react-redux";
import CollapsableMapper from "../components/CollapsableMapper";
import { deleteMovie } from "../actions";

// The list component container should mapStateToProps for the array of things
function mapStateToProps(state) {
  return {
    movies: state.movies
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
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CollapsableMapper);
