import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Movies(props) {
  return (
    <CollapsableMapper data={props.movies} path="movie" field="title" field2="genre" field3="plot" />
  );
}
export default Movies;
