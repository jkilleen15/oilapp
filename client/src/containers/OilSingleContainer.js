import { connect } from "react-redux";
import OilSingle from "../components/OilSingle";
import { getOil } from "../actions";

function mapStateToProps(state) {
  return {
    oil: state.oil
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOil: function (id) {
      dispatch(getOil(id));
      // const action = getComment(id);
      // dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OilSingle);
