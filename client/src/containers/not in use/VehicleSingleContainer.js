import { connect } from "react-redux";
import VehicleSingle from "../components/VehicleSingle";
import { getVehicle } from "../actions";

function mapStateToProps(state) {
  return {
    vehicle: state.vehicle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicle: function (id) {
      dispatch(getVehicle(id));
      // let action = getVehicle(id);
      // dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSingle);
