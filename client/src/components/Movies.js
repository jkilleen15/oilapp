import React, { Component } from "react";
import {Link} from "react-router-dom";

// class CollapsableMapper extends Component {
class Movies extends Component {
  constructor() {
    super();
    this.state = {visible: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("Click happened");
    console.log(e);
    console.log(e.target.id);
    this.props.deleteMovie(e.target.id);
    console.log("handleClickComplete");
  }

// <li><Link to={"/" + this.props.path + "/" + d._id}> view movie details </Link></li>

  render() {
    let buttonText = "Hide";
    let movieDivs = "";
    if (this.state.visible) {
      buttonText = "Hide My Movies";
      // movieDivs = this.props.data.map((d,i) => {
         movieDivs = this.props.movies.map((d,i) => {
        return (
          <div key={i}>
            {d.title}
            <ul>
            <li>{d.genre}</li>
            <li>{d.plot}</li>
            <li><Link to={"/movie/" + d._id}> view movie details </Link></li>

              <button onClick={this.handleClick} id={d._id}>
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

// export default CollapsableMapper;
export default Movies;

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
