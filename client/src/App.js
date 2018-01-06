import React, { Component } from "react";
import "./App.css";
import ListOfMovies from "./components/ListOfMovies";
import MovieSingleContainer from "./containers/MovieSingleContainer";
import CreateMovieListingContainer from "./containers/CreateMovieListingContainer";
import UpdateMovieListingContainer from "./containers/UpdateMovieListingContainer";

import {
   BrowserRouter,
   Route,
   Switch
  } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: [],
    };
  }
  componentDidMount() {
    this.props.loadMovies();
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
            <Route path="/update" component={UpdateMovieListingContainer} />
            <Route path="/" component={ListOfMovies} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);
