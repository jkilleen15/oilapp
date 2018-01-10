import React from "react";
import {Link} from "react-router-dom";
// import Select from "react-select";
// import { Button } from "react-bootstrap";
// import Movie from './Movie';
// <li key={i}><a>{movie.title} {movie._id}</a></li>

class SearchListShow extends React.Component {
  constructor(props) {
    super(props);
    /*
     * The data (movies) comes from the higher level component as props. We are
     * going to use state to manage filtering of movies.
     */
    this.state = {
      searchableListVisible: true,

      filteredMovies: [],
      filtering: false,
      keyword: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.filtering) {
      /*
       * If the movies got deleted or watched/unwatched we have to reflect it
       * in the filteredMovies array.
       */
      this.setState({ filteredMovies: this.filterMovies(nextProps.movies) });
    }
  }

  filterMovies(movies) {
    return movies.filter((movie) => {
      // search by keyword
      // return movie.emotions.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1;
      // return (
      return movie.title.toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      movie.emotions.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      movie.keywords.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      movie.application.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      movie.properties.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      movie.bodySystems.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1;
      // return;
      // );
    });
  }

  filterList(event) {
    let keyword = event.target.value;
    if (!keyword) {
      this.setState({ filtering: false });
      return;
    }
    this.setState({
      filteredMovies: this.filterMovies(this.props.movies),
      filtering: true,
      // keyword: keyword
      keyword
    });
  }

  // {movieList.length ? movieList : 'Nothing found.'}

  render() {
    let movieList = [];
    let movies = this.state.filtering ? this.state.filteredMovies : this.props.movies;

    if (movies.length) {
      movies.map((movie) => {
        // movieList.push(<Movie key={movie._id} movie={movie} />);
        // movieList.push(movie.title, movie._id);
        movieList.push(movie);
      });
    }

/* removed for button
    const movieListShow = movieList.map((movie,i) => (
      <li><Link to={"/movie/" + movie._id}> {movie.title} </Link></li>
    ));
*/

/*
    if (!this.props.movies.length) {
      return (
        <div className="column">
          <h4>{this.props.title}</h4>
          Loading searchable list...
        </div>
      );
    }
*/

    ////
    let searchShowButtonText = "";
    let showFullYesNoLabel = "";
    let quickLinksLabel = "";
    let resultsListLabel = "";
    let inputBox = "";
    let resultStatus = "";
    let movieListShow = "";
    let movieListShowLong = "";
    if (this.state.searchableListVisible) {
      searchShowButtonText = "Hide Searchable List";

      showFullYesNoLabel = "Search My Oils";
      // <div><h2>Search My Oils</h2></div>;

      quickLinksLabel =
      <div><h3>Quick Link Results: </h3></div>;

      resultsListLabel =
      <div><h3>Search Results: </h3></div>;

      resultStatus =
        <i>
          {this.state.filtering ?
            this.state.filteredMovies.length +
            " out of " + this.props.movies.length + " oils match your search" :
            this.props.movies.length + " oils in my collection"}</i>;

      inputBox =
        <input
        className="prompt"
        placeholder="Search oils by keyword (oil name, emotions, keywords, application, body systems)"
        onChange={this.filterList.bind(this)}
        // onChange={this.filterList}
        // value={this.state.keyword}
      />;

      // movieDivs = this.props.data.map((d,i) => {
         // movieDivs = this.props.movies.map((d,i) => {
         //<li className="listNoDecoration" key={movie._id}><Link to={"/movie/" + movie._id}> {movie.title} </Link></li>

         movieListShow =
         movieList.map((movie,i) => (
           <li key={i}><Link to={"/movie/" + movie._id}> {movie.title} </Link></li>
         ));

         movieListShowLong = movieList.map((movie,i) => (
         // movieDivs = this.props.movies.map((d,i) => {
          <div key={i}>
          <div>
            <h3>{movie.title}</h3>
            <ul>
            <li><i>{movie.oilType}</i></li>
            <li>Application: {movie.application}</li>
            <li>Properties: {movie.properties}</li>
            <li><Link to={"/movie/" + movie._id}> view and update movie details </Link></li>
          </ul>
        </div>
              <button onClick={this.handleDeleteClick} id={movie._id}>
                DELETE THIS OIL - {movie.title.toUpperCase()}
              </button>
          </div>
         ));
         // });
    } else {
      searchShowButtonText = "Search My Collection";
      showFullYesNoLabel = "";
      quickLinksLabel = "";
      resultsListLabel = "";
    }

    return (
    //  //

    // return (
        <div className="column">
          <div>
            <button onClick={() => {
              this.setState({
                searchableListVisible: !this.state.searchableListVisible
              });
            }
          }>
              <h3>{searchShowButtonText}</h3>
            </button>

          </div>

          <div><h2>{showFullYesNoLabel}</h2></div>
          <div><h3>{inputBox}</h3></div>
          {resultStatus}
          {quickLinksLabel}

        <div className="ui bottom attached segment">
          <div className="ui divided items">
            <ul className="listNoDecoration">
            {movieList.length ? movieListShow : "No matches found."}
          </ul>
          </div>

          {resultsListLabel}
          <div className="ui divided items">
            {movieList.length ? movieListShowLong : "No matches found."}
          </div>
        </div>
        </div>
     );
  }
}

/*
Movie.propTypes = {
  movies: React.PropTypes.array,
  title: React.PropTypes.string
};
*/

export default SearchListShow;
// module.exports = searchListShow;
