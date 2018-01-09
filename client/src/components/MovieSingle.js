import React, {Component} from "react";
import {Link} from "react-router-dom";

class MovieSingle extends Component {
  // constructor() {
  //   super();
  // }

/*
  componentWillMount() {
    const thisMovieId = this.props.match.params.id;
    this.props.getMovie(thisMovieId);
  }
*/

  componentDidMount() {
    const thisMovieId = this.props.match.params.id;
    this.props.getMovie(thisMovieId);
  }

  render(){
    const PersonImg = "http://avantsynergy.com/wp-content/uploads/2016/03/highlight-reel.png";
    console.log(this.props.movie);
    console.log("this.props.movie.links props: " + this.props.movie.links);

    /*
    let linksDisplay = "";
    if (!this.props.movie.links || this.props.movie.links === "") {
      linksDisplay = "";
    } else {
      const linksToDisplay = this.props.movie.links;
      const linksToDisplay2 = linksToDisplay.split(",");
      console.log("formatOptions2" + linksToDisplay2);
      linksDisplay =
        linksToDisplay2.map((link,i) => (
        <h3 key={i}><li><a href={link} target="_blank">{link}</a></li></h3>
    ));
    }
    */
/*
    let warningsDisplay = "";
    if (!this.props.movie.warnings || this.props.movie.warnings === "") {
      warningsDisplay = "";
    } else {
      const warningsToDisplay = this.props.movie.warnings;
      const warningsToDisplay2 = warningsToDisplay.split(",");
      console.log("warningsOptions2" + warningsToDisplay2);
      warningsDisplay =
        warningsToDisplay2.map((warn,i) => (
        <h3 key={i}><li><a href={warn} target="_blank">{warn}</a></li></h3>
    ));
    }
    */

/*
    let linksDisplay="";
    if (!this.props.movie.links){
      linksDisplay = "";
    } else {
      const linksToDisplay = this.props.movie.links;
      const linksToDisplay2 = linksToDisplay.split(",");
      console.log("formatOptions2" + linksToDisplay2);
      linksDisplay =
        linksToDisplay2.map((link,i) => (
        <h3><li key={i}><a href={link} target="_blank">{link}</a></li></h3>
    ));
    }
    */

/* removed
<h3>Movie Poster or Image URL: <br /><img src={this.props.movie.image || PersonImg}
  alt={""} /></h3>
*/

    return (
      <div>
        <h3><Link to={"/update/" + this.props.movie._id}> edit or update this listing </Link></h3>
        <h3>Movie Id: {this.props.movie._id}</h3>

        <h3>Movie Poster or Image URL: <br /><img src={this.props.movie.image || PersonImg}
          alt={"Note: " + this.props.movie.title + " image will not load. Check your url."} /></h3>

        <h3>Movie Title: {this.props.movie.title}</h3>
        <h3>Date watched: {this.props.movie.date || "n/a"}</h3>
        <h3>Viewing Format: {this.props.movie.format || "n/a"}</h3>
        <h3>Genre: {this.props.movie.genre}</h3>
        <h3>Description: {this.props.movie.plot}</h3>
        <h3>Oil Type: {this.props.movie.oilType}</h3>
        <h3>Warnings: {this.props.movie.warnings}</h3>
        <h3>Emotions: {this.props.movie.emotions}</h3>
        <h3>Application: {this.props.movie.application}</h3>
        <h3>Body Systems Affected: {this.props.movie.bodySystems}</h3>
        <h3>Properties: {this.props.movie.properties}</h3>
        <h3>Keywords: {this.props.movie.keywords || ""}</h3>
        <h3>Links: {this.props.movie.links || ""}</h3>


        <h3><Link to={"/update/" + this.props.movie._id}> edit or update this listing </Link></h3>
      </div>
    );
  }
 // }
}
// removed!
// {linksDisplay}

export default MovieSingle;
