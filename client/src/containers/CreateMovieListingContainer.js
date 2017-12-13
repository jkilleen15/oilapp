import { connect } from "react-redux";
import CreateMovieListing from "../components/CreateMovieListing";
import { createMovie } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createMovie: function (mov) {
      dispatch(createMovie(mov));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateMovieListing);
