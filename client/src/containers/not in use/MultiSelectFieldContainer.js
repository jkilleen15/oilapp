import { connect } from "react-redux";
import MultiSelectField from "../components/MultiSelectField";

function mapStateToProps(state) {
  return {
    oil: state.oil,
    oils: state.oils,
  };
}

export default connect(mapStateToProps)(MultiSelectField);
