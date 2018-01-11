import React, { Component } from "react";
import {Link} from "react-router-dom";

// class CollapsableMapper extends Component {
class Oils extends Component {
  constructor() {
    super();
    this.state = {visible: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("Click happened");
    console.log(e);
    console.log(e.target.id);
    this.props.deleteOil(e.target.id);
    console.log("handleClickComplete");
  }

// <li><Link to={"/" + this.props.path + "/" + d._id}> view oil details </Link></li>
// <li><Link to={"/update/" + d._id}> edit or update this listing </Link></li>
  render() {
    let buttonText = "Hide";
    let oilDivs = "";
    if (this.state.visible) {
      buttonText = "Hide My Oils";
      // oilDivs = this.props.data.map((d,i) => {
         oilDivs = this.props.oils.map((d,i) => {
        return (
          <div key={i}>
            {d.title}
            <ul>
            <li>{d.genre}</li>
            <li>{d.plot}</li>
            <li><Link to={"/oil/" + d._id}> view and update oil details </Link></li>

              <button onClick={this.handleClick} id={d._id}>
                DELETE THIS OIL
              </button>

            </ul>
          </div>
        );
         });
    } else {
      buttonText = "Show My Oils";
      oilDivs = "";
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
