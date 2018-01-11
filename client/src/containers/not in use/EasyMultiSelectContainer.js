import { connect } from "react-redux";
import EasyMultiSelect from "../components/EasyMultiSelect";

function mapStateToProps(state) {
  return {
    oil: state.oil,
    oils: state.oils,
  };
}

export default connect(mapStateToProps)(EasyMultiSelect);
