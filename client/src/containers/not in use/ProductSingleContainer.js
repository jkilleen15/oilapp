import { connect } from "react-redux";
import ProductSingle from "../components/ProductSingle";
import { getProduct } from "../actions";

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getProduct: function (id) {
      dispatch(getProduct(id));
      // let action = getProduct(id);
      // dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSingle);
