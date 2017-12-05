import React, {Component} from "react";

class ProductSingle extends Component {

  componentDidMount() {
    const thisProductId  = this.props.match.params.id;
    this.props.getProduct(thisProductId);
  }

  render(){
    return (
      <div>
        <img src={this.props.product.imgUrl} alt={this.props.product.name} />
        <h2>Product Name: {this.props.product.name || "n/a"}</h2>
        <h3>About: {this.props.product.description || "n/a"}</h3>
        <h3>Price: {this.props.product.price || "n/a"}</h3>
        <h3>Category: {this.props.product.category || "n/a"}</h3>
        <h3>Product Rating: {this.props.product.rating || "n/a"} / 5 Stars</h3>

      </div>
    )
  }
}

export default ProductSingle;
