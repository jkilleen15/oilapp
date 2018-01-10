import React, { Component } from "react";
import {Link} from "react-router-dom";
// import { Button } from "react-bootstrap";

// class CollapsableMapper extends Component {
class Movies extends Component {
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
    this.props.deleteMovie(e.target.id);
    console.log("handleDeleteClick Complete");
  }

// <li><Link to={"/" + this.props.path + "/" + d._id}> view movie details </Link></li>
// <li><Link to={"/update/" + d._id}> edit or update this listing </Link></li>
  render() {

    let showFullListButtonText = "";
    let showFullYesNoLabel = ""
    let movieDivs = "";
    if (this.state.fullListVisible) {

      showFullListButtonText = "Hide Full List";

      showFullYesNoLabel =
      <h2>My Oils Quick Look Listing</h2>;
      // movieDivs = this.props.data.map((d,i) => {

      movieDivs = this.props.movies.map((d,i) => (

    // return (
          <div key={i}>
          <div>
            <h3>{d.title}</h3>
            <ul>
            <li><i>{d.oilType}</i></li>
            <li>Application: {d.application}</li>
            <li>Properties: {d.properties}</li>
            <li><Link to={"/movie/" + d._id}> view and update movie details </Link></li>
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
      movieDivs = "";
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
        {movieDivs}
      </div>);
  }
}

// export default CollapsableMapper;
export default Movies;

// REMOVED UNTIL CAN SORT OUT id v _id sent from Movies
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
