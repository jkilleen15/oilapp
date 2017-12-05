import React, { Component } from "react";
import {Link} from "react-router-dom";

class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Hide";
    let movieDivs = "";
    if (this.state.visible) {
      buttonText = "Hide My Movies";
      movieDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.field]}
            <Link to={"/" + this.props.path + "/" + d._id}> View Movie Details </Link>
          </div>
        );
      });
    } else {
      buttonText = "Show My Movies";
      movieDivs = "";
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
        {movieDivs}
      </div>);
  }
}


export default CollapsableMapper;

/*
class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Hide";
    let movieDivs = "";
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
