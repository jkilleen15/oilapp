import { connect } from "react-redux";
import CreateOilListing from "../components/CreateOilListing";
import { createOil } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createOil: function (mov) {
      dispatch(createOil(mov));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateOilListing);
