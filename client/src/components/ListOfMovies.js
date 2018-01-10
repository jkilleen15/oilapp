import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import MoviesContainer from "../containers/MoviesContainer";
import SearchListShowContainer from "../containers/SearchListShowContainer";

function ListOfMovies() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>My Good Movies Lately </h1>
        <h3><Link to={"/create"}> create new movie </Link></h3>
        <h2>Search My Oils</h2>
        <SearchListShowContainer />
        <h2>My Oils Quick Look Listing</h2>
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
