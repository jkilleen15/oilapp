import React, { Component } from "react";
import {Link} from "react-router-dom";
// import { Button } from "react-bootstrap";

// class CollapsableMapper extends Component {
class Oils extends Component {
  constructor() {
    super();
    this.state = {
      fullListVisible: false,
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(e) {
    console.log("Click happened");
    alert("Oil Deleted!");
    console.log(e);
    console.log(e.target.id);
    this.props.deleteOil(e.target.id);
    console.log("handleDeleteClick Complete");
  }

// <li><Link to={"/" + this.props.path + "/" + d._id}> view oil details </Link></li>
// <li><Link to={"/update/" + d._id}> edit or update this listing </Link></li>
  render() {

    let showFullListButtonText = "";
    let showFullYesNoLabel = ""
    let oilDivs = "";
    if (this.state.fullListVisible) {

      showFullListButtonText = "Hide Full List";

      showFullYesNoLabel =
      <h2>My Oils Quick Look Listing</h2>;

      // TODO look into alphabetizing full (static) list
      // let oilAlpha = []
      // oilAlpha = this.props.oils.title.sort((a,b) => a.timeM - b.timeM);

      oilDivs = this.props.oils.map((d,i) => (
      // oilDivs = oilAlpha.map((d,i) => (
      // removed bc seems extraneous for initial listing --> <li><i>Oil Type: {d.oilType}</i></li>

    // return (
          <div key={d._id}>
          <div>
            <h3>{d.title}</h3>
            <ul>
            <li>Uses: {d.usage}</li>
            <li>Application: {d.application}</li>
            <li>Properties: {d.properties}</li>
            <li><Link to={"/oil/" + d._id}> view and update oil details </Link></li>
          </ul>
        </div>
              <button onClick={this.handleDeleteClick} id={d._id}>
                DELETE THIS OIL - {d.title.toUpperCase()}
              </button>
          </div>
        ));
         // });

    } else {
      showFullListButtonText = "View Full Listing of Oils";
      showFullYesNoLabel = "";
      oilDivs = "";
    }

    return (
      <div>
        <button onClick={() => {
          this.setState({
            fullListVisible: !this.state.fullListVisible
          });
        }
        }>
          <h3>{showFullListButtonText}</h3>
        </button>
        {showFullYesNoLabel}
        {oilDivs}
      </div>);
  }
}

// export default CollapsableMapper;
export default Oils;

// REMOVED UNTIL CAN SORT OUT id v _id sent from Oils
// <li><Link to={"/update/" + d._id}> edit or update this listing </Link></li>
// End Removed

/*
class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Hide";
    let oilDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.field]}
            {d[this.props.field1]}
            {d[this.props.field2]}
            {d[this.props.field3]}
            <Link to={"/" + this.props.path + "/" + d._id}> View </Link>
          </div>
        );
      });
    } else {
      buttonText = "Show";
      userDivs = "";
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {userDivs}
      </div>);
  }
}


export default CollapsableMapper;

*/
