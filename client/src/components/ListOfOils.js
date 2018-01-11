import React from "react";
import {Link} from "react-router-dom";
// import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import OilsContainer from "../containers/OilsContainer";
import SearchListShowContainer from "../containers/SearchListShowContainer";

function ListOfOils() {
  return (
    <div className="aLittleSpace">
      <div>
        <h1>My Essential Oil Collection </h1>
        <div>
        <button><h3><Link className="linkNoDecoration" to={"/create"}> Create New Oil! </Link></h3></button>
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
};
export default ListOfOils;
