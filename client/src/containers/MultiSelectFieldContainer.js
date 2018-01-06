import { connect } from "react-redux";
import MultiSelectField from "../components/MultiSelectField";

function mapStateToProps(state) {
  return {
    movie: state.movie,
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MultiSelectField);
