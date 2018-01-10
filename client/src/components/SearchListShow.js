import React from "react";
import {Link} from "react-router-dom";
import Select from "react-select";
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
      searchableListVisible: false,

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

    if (this.props.movies.length === 0) {
      return (
        <div className="column">
          <h4>{this.props.title}</h4>
          No movies on this list.
        </div>
      );
    }

    ////
    let buttonText = "Show List";
    let inputBox = "";
    let resultStatus = "";
    let movieListShow = "";
    if (this.state.searchableListVisible) {
      buttonText = "Hide Searchable List";

      resultStatus =
      <h4>

        <div className="ui label basic circular">
          {this.state.filtering ?
            this.state.filteredMovies.length +
            " out of " + this.props.movies.length + " oils match your search" :
            this.props.movies.length + " oils in my collection"}
        </div>
      </h4>;

      inputBox =

      <div className="ui transparent icon input">
        <h3><input
        className="prompt"
        placeholder="Search oils by keyword (oil name, emotions, keywords, application, body systems)"
        onChange={this.filterList.bind(this)}
        // onChange={this.filterList}
        // value={this.state.keyword}
      /></h3>
    </div>;

      // movieDivs = this.props.data.map((d,i) => {
         // movieDivs = this.props.movies.map((d,i) => {
         movieListShow = movieList.map((movie,i) => (
           <li className="listNoDecoration" key={movie._id}><Link to={"/movie/" + movie._id}> {movie.title} </Link></li>
         ));

      }
    else {buttonText = "Show Searchable List";}

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
              {buttonText}
            </button>

          </div>
          {resultStatus}
          <div className="ui top attached menu">
            <div className="right menu">
              <div className="ui right aligned search item">
                {inputBox}
            </div>
          </div>
        </div>
        <div className="ui bottom attached segment">
          <div className="ui divided items">
            {movieList.length ? movieListShow : 'No matches found.'}
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
