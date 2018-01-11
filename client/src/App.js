import React, { Component } from "react";
import "./App.css";
import ListOfOils from "./components/ListOfOils";
import OilSingleContainer from "./containers/OilSingleContainer";
import CreateOilListingContainer from "./containers/CreateOilListingContainer";
import UpdateOilListingContainer from "./containers/UpdateOilListingContainer";

import {
   BrowserRouter,
   Route,
   Switch
  } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      oils: [],
      oil: [],
    };
  }
  componentDidMount() {
    this.props.loadOils();
  }

  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/oil/:id" component={OilSingleContainer} />
            <Route path="/create" component={CreateOilListingContainer} />
            <Route path="/update" component={UpdateOilListingContainer} />
            <Route path="/" component={ListOfOils} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);
