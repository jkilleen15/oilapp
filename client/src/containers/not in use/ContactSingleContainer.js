import { connect } from "react-redux";
import ContactSingle from "../components/ContactSingle";
import { getContact } from "../actions";

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContact: function (id) {
      dispatch(getContact(id));
      // let action = getContact(id);
      // dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSingle);
