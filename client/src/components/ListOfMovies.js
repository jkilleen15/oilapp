import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import MoviesContainer from "../containers/MoviesContainer";

function ListOfMovies() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>My Good Movies Lately </h1>
        <li><Link to={"/create"}> create new movie </Link></li>
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
