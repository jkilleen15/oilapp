import { connect } from "react-redux";
import UpdateMovieListing from "../components/UpdateMovieListing";
import { updateMovie } from "../actions";

function mapStateToProps(state) {
  return {
    movie: state.movie,
    // selectedOption: state.movie.selectedOption,
    // movies: state.movies

    /*
    stayOpen: state.stayOpen,
    warningOptions: state.warningOptions,
    emotionsOptions: state.emotionsOptions,
    applicationOptions: state.applicationOptions,
    bodySystemsOptions: state.bodySystemsOptions,
    propertiesOptions: state.propertiesOptions,
    oilTypeOptions: state.oilTypeOptions,
    keywordsOptions: state.keywordsOptions,
    linksOptions: state.linksOptions,
    */
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateMovie: function (mov) {
      dispatch(updateMovie(mov));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateMovieListing);
