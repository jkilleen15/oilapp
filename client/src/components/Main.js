import React from "react";
import MoviesContainer from "../containers/MoviesContainer";
// import ProductsContainer from "../containers/ProductsContainer";
// import VehiclesContainer from "../containers/VehiclesContainer";
// import CommentsContainer from "../containers/CommentsContainer";
import CreateMovieListingContainer from "../containers/CreateMovieListingContainer";

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
export default ListOfMovies;
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
