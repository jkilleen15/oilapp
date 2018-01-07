import React, {Component} from "react";
import {Link} from "react-router-dom";

class MovieSingle extends Component {

  componentDidMount() {
    const thisMovieId = this.props.match.params.id;
    this.props.getMovie(thisMovieId);
  }

  render(){
    const PersonImg = "http://avantsynergy.com/wp-content/uploads/2016/03/highlight-reel.png";
    console.log(this.props.movie);
    console.log(this.props.movie.title);
    return (
      <div>
        <li><Link to={"/update/" + this.props.movie._id}> edit or update this listing </Link></li>
        <h3>Movie Id: {this.props.movie._id}</h3>
        <h3>Movie Poster or Image URL: <br /><img src={this.props.movie.image || PersonImg}
          alt={this.props.movie.title + " Image"} /></h3>
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
        <h3>Keywords: {this.props.movie.keywords}</h3>

        <li><Link to={"/update/" + this.props.movie._id}> edit or update this listing </Link></li>
      </div>
    );
  }
}

export default MovieSingle;
