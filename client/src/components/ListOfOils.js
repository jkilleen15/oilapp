import React from "react";
import {Link} from "react-router-dom";
// import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import OilsContainer from "../containers/OilsContainer";
import SearchListShowContainer from "../containers/SearchListShowContainer";

function ListOfOils() {
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
        <OilsContainer />
      </div>
    </div>
  );
}

ListOfOils.propTypes = {
  oils: PropTypes.array,
  // oils: PropTypes.array.isRequired,
};
export default ListOfOils;
