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
// ListOfUsers
import ListOfMovies from "./components/ListOfMovies";
// import Main from "./components/Main";
import MovieSingleContainer from "./containers/MovieSingleContainer";
import CreateMovieListingContainer from "./containers/CreateMovieListingContainer";
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
    // IS THIS STATE BEING USED
    // I THINK I CAN CHANGE NAME AND NOTHING CHANGES
    // HOW CONNECTED TO PROPS REQUIRED IN MAIN (MOVIES)
    // HOW DO I INIITALLY POPULATE REQUIRED MOVIES ARRAY PROP
       // DEFINED IN MAIN/LIST OF USERS?
    this.state = {movies: []};
  }

  componentDidMount() {
    this.props.loadMovies();
    // this.props.loadContacts();
    // this.props.loadVehicles();
    // this.props.loadProducts();
  }

  render() {
  /*
  X Create a route to show the list container
    X Main / MoviesContainer
  X Create a route to show the create container
    Currently built into Main with MoviesContainer
    ? build CreateMovieListingContainer as separate destination?
  X Create a route to show the detail container.
    X MovieSingleContainer
  */
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/movie/:id" component={MovieSingleContainer} />
            <Route path="/create" component={CreateMovieListingContainer} />
            <Route path="/" component={ListOfMovies} />
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
