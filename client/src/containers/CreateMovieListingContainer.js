import { connect } from "react-redux";
import CreateMovieListing from "../components/CreateMovieListing";
import {
  createMovie,
  // createVehicle,
  // createContact,
  // createComment
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createMovie: function (mov) {
      dispatch(createMovie(mov));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateMovieListing);

/*
import { connect } from "react-redux";
import CreateMovieListing from "../components/CreateMovieListing";
import {
  createProduct,
  // createVehicle,
  // createContact,
  // createComment
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createProduct: function (prod) {
      dispatch(createProduct(prod));
    },
    createVehicle: function (veh) {
      dispatch(createVehicle(veh));
    },
    createContact: function (contact) {
      dispatch(createContact(contact));
    },
    createComment: function (comm) {
      dispatch(createComment(comm));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);
*/
