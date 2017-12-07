import React, { Component } from "react";
import {Link} from "react-router-dom";
// import { deleteMovie } from "../actions";

class CollapsableMapper extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

//  componentDidMount() {
  //  const thisMovieId = this.props.match.params.id;
  //  this.props.deleteMovie(thisMovieId);
//  }

  render() {
    let buttonText = "Hide";
    let movieDivs = "";
    if (this.state.visible) {
      buttonText = "Hide My Movies";
      movieDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.field]}
            <ul>
            <li>{d[this.props.field2]}</li>
            <li>{d[this.props.field3]}</li>
            <li><Link to={"/" + this.props.path + "/" + d._id}> view movie details </Link></li>

              <button onClick={this.props.deleteMovie}>
                DELETE THIS MOVIE
              </button>

            </ul>
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
