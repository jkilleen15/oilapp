import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadOils} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadOils: function () {
      dispatch(loadOils());
    },
  };
}

export default connect(null,mapDispatchToProps)(App);
