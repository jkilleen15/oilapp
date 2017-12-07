import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import MoviesContainer from "../containers/MoviesContainer";

// import CreateMovieListingContainer from "../containers/CreateMovieListingContainer";

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

// HOW DO I INIITALLY POPULATE THIS REQUIRED PROP?
// WHERE DO I ADD THIS? README REFERENCES ARRAY, BUT IS IT OBJECT
// DOES THIS PROP ARRAY RELATE TO STATE.JS
// HOW DO I USE STATE.JS IN THIS APP?
  // DO I PUT ANYTHING IN STATE.JS, OR DOES IT CREATE ITSELF BASED ON
  // EXPORTED CODE FROM OTHER FILES?

ListOfMovies.propTypes = {
  movies: PropTypes.array,
    // movies: PropTypes.array.isRequired,
};
export default ListOfMovies;

/*
function ListOfMovies() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>My Good Movies Lately </h1>
        <MoviesContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreateMovieListingContainer />
      </div>
    </div>
  );
}
*/

/*
<div style={{float: "left", width: "49%"}}>
  <li><Link to={"/create"}> create new movie </Link></li>
  <CreateMovieListingContainer />

</div>
*/

/*
function ListOfMovies() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Comments </h1>
        <CommentsContainer />
        <h1>Contacts</h1>
        <ContactsContainer />
        <h1>Vehicles</h1>
        <VehiclesContainer />
        <h1>Products</h1>
        <ProductsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreateThingsContainer />
      </div>
    </div>
  );
}
*/
