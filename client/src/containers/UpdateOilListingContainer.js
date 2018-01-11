import { connect } from "react-redux";
import UpdateOilListing from "../components/UpdateOilListing";
import { updateOil } from "../actions";

function mapStateToProps(state) {
  return {
    oil: state.oil,
    // selectedOption: state.oil.selectedOption,
    // oils: state.oils

    /*
    stayOpen: state.stayOpen,
    warningOptions: state.warningOptions,
    usageOptions: state.usageOptions,
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
    updateOil: function (mov) {
      dispatch(updateOil(mov));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateOilListing);
