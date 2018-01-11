import { connect } from "react-redux";
import Oils from "../components/Oils";
import { deleteOil } from "../actions";
import { updateOil } from "../actions";
// import movieGenres from "../movieGenres";

// The list component container should mapStateToProps for the array of things
function mapStateToProps(state) {
  return {
    oils: state.oils,
    oil: state.oil,
    // movieGenres: movieGenres
  };
}

// The list component container should mapDispatchToProps
// for the deleteThing action
function mapDispatchToProps(dispatch) {
  return {
    deleteOil: function (id) {
      dispatch(deleteOil(id));
      // const action = getComment(id);
      // dispatch(action);
    },
    updateOil: function (mov) {
      dispatch(updateOil(mov));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Oils);
