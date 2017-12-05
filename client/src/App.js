/*
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        Client
      </div>
    );
  }
}
export default (App);
*/
import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import MovieSingleContainer from "./containers/MovieSingleContainer";
// import CommentSingleContainer from "./containers/CommentSingleContainer";
// import ContactSingleContainer from "./containers/ContactSingleContainer";
// import ProductSingleContainer from "./containers/ProductSingleContainer";

import {
   BrowserRouter,
   Route,
   Switch
  } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {myMovies: []};
  }

  componentDidMount() {
    this.props.loadMovies();
    // this.props.loadContacts();
    // this.props.loadVehicles();
    // this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/movie/:id" component={MovieSingleContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);

/*
import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import VehicleSingleContainer from "./containers/VehicleSingleContainer";
import CommentSingleContainer from "./containers/CommentSingleContainer";
import ContactSingleContainer from "./containers/ContactSingleContainer";
import ProductSingleContainer from "./containers/ProductSingleContainer";

import {
   BrowserRouter,
   Route,
   Switch
  } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }

  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/vehicle/:id" component={VehicleSingleContainer} />
            <Route path="/comment/:id" component={CommentSingleContainer} />
            <Route path="/contact/:id" component={ContactSingleContainer} />
            <Route path="/product/:id" component={ProductSingleContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);

*/
