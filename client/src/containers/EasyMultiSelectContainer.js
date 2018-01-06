import { connect } from "react-redux";
import EasyMultiSelect from "../components/EasyMultiSelect";

function mapStateToProps(state) {
  return {
    movie: state.movie,
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(EasyMultiSelect);
