import React from "react";
import {Link} from "react-router-dom";
// import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import MoviesContainer from "../containers/MoviesContainer";
import SearchListShowContainer from "../containers/SearchListShowContainer";

function ListOfMovies() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>My Essential Oil Collection </h1>
        <div>
        <button><h3><Link to={"/create"}> Add Oil to Collection </Link></h3></button>
      </div>
      <div>
        <SearchListShowContainer />
      </div>
        <MoviesContainer />
      </div>
    </div>
  );
}

ListOfMovies.propTypes = {
  movies: PropTypes.array,
  // movies: PropTypes.array.isRequired,
};
export default ListOfMovies;
