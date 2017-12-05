import { connect } from "react-redux";
import Movies from "../components/Movies";

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(Movies);
