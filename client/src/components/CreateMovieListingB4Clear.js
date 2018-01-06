import React, {Component} from "react";
import {Link} from "react-router-dom";
import MultiSelectField from "../components/MultiSelectField";
import movieGenres from "../movieGenres";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

class CreateMovieListing extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        image: "",
        title: "",
        date: "",
        format: "",
        genre: "",
        plot: "",
        emotions: [],
        keywords: "",
        movieGenres,
      },
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    // this.handleEmotions = this.handleEmotions.bind(this);
    // this.addEmotions = this.addEmotions.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
  }

  getInitialState () {
  return {
    removeSelected: true,
    disabled: false,
    crazy: false,
    stayOpen: false,
    value: [],
    rtl: false,
    emotions: this.state.movie.emotions,
  };
}

  handleSelectChange(value) {
    this.getInitialState();
    console.log("You\"ve selected:", value);

    const movie = {emotions: value};
    // console.log("movieEmotionsSelected before " + movieEmotionsSelected);
    this.setState({
      movie: Object.assign(this.state.movie,movie)
      // movie: Object.assign(this.state.movie,movie)
    });
    console.log("movie.emotions: " + this.state.movie.emotions)
    // console.log("movieEmotionsSelected after " + movieEmotionsSelected);

    // this.setState({ emotions: value });
    // this.setState({ emotions: value });
    // this.setState({ emotionsSelected });
    // console.log("emotions: " + this.state.movie.emotions)
  //  this.handleEmotions(value);
  }

  toggleCheckbox (e) {
		this.setState({
			[e.target.name]: e.target.checked,
		});
	}

	toggleRtl (e) {
		let rtl = e.target.checked;
		this.setState({ rtl });
	}

/*
  handleEmotions(value) {
        console.log("target value " + value);
        // const movieEmotions = [];
        // const movieEmotions = [];
        movieEmotions.push(value);
        console.log("movieEmotions: " + movieEmotions);
        this.addEmotions(value);
    }

    addEmotions(value) {
      // movieEmotionsSelected.push(movieEmotions);
      // console.log("movieEmotionsSelected: " + movieEmotionsSelected);
      const movie = {emotions: value};
      // console.log("movieEmotionsSelected before " + movieEmotionsSelected);
      this.setState({
        movie: Object.assign(this.state.movie,movie)
        // movie: Object.assign(this.state.movie,movie)
      });
      console.log("movie.emotions: " + this.state.movie.emotions)
      // console.log("movieEmotionsSelected after " + movieEmotionsSelected);
    }
    */

  render() {
    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
  //  const emotionsArray = [];

    const emotionsArray = [
      // "happy", "sad", "regretful", "inspired", "uncomfortable", "melancholy"
    { label: "Happy", value: "happy" },
    { label: "Sad", value: "sad" },
    { label: "Regretful", value: "regretful" },
    { label: "Inspired", value: "inspired"},
    { label: "Uncomfortable", value: "uncomfortable" },
    { label: "Melancholy", value: "melancholy" },
    ];

    const movieEmotions = [];
    const movieEmotionsSelected = [];

    const formatOptionDisplay = formatOptions.map((f,i) => (
      <option value={f} key={i}>{f}</option>
    ));

    const movieGenreDisplay = movieGenres.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));

    // "happy", "sad", "regretful", "inspired", "uncomfortable"
    const emotionDisplay = emotionsArray.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));

    // BONUS - dropdowns used for viewing format and movie genres
    //       - format dropdown pulls from local variable array
    //       - grenres dropdown utilizes movieGenres.js exported array

// /* JUST NOW!!!
/*
  function handleSelectChange(value) {
    console.log("You\"ve selected:", value);
    this.setState({ emotions: value });
    // this.setState({ emotionsSelected });
    console.log("emotions: " + this.state.emotionsValue)
  }
    function handleEmotions(e) {
        console.log("target value " + e);
        // const movieEmotions = [];
        // const movieEmotions = [];
        movieEmotions.push(e);
        console.log("movieEmotions: " + movieEmotions);
        addEmotions(e);
    }

    function addEmotions(e) {
      // movieEmotionsSelected.push(movieEmotions);
      // console.log("movieEmotionsSelected: " + movieEmotionsSelected);
      const movie = {emotions: e};
      // console.log("movieEmotionsSelected before " + movieEmotionsSelected);
      this.setState({
        movie: Object.assign(this.state.movie,movie)
        // movie: Object.assign(this.state.movie,movie)
      });
      console.log("movie.emotions: " + this.state.movie.emotions)
      // console.log("movieEmotionsSelected after " + movieEmotionsSelected);
    }

    */
// END JUST NOW */


    /*
    Emotions: <select multiple
      onChange={(e) => {
      //  const movie = {emotions: e.target.value};
        const movieEmotions = [];
        movieEmotions.push(e.target.value);
        console.log("movieEmotions: " + movieEmotions);
        const movie = {emotions: movieEmotions};
        // console.log("movieEmotions: " + movieEmotions);
        console.log("movie: " + movie);
        this.setState({
          movie: Object.assign(this.state.movie,movie)
        });
      }} >
    */

    return (
      <div>
        <div>
          <h1>Create a movie listing:</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createMovie) {
              this.props.createMovie(this.state.movie);
            }
          }}>
            <div>
            Movie Poster or Image URL (please enter a URL or leave empty, not required):
          <input onChange={(e) => {
            const movie = {image: e.target.value || ""};
            this.setState({
              movie: Object.assign(this.state.movie,movie)
            });
          }} />
            </div>
            <div>
              Movie Title: <input onChange={(e) => {
                const movie = {title: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Date watched: <input onChange={(e) => {
                const movie = {date: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Viewing Format(theater, redbox, netflix, etc.):
              <select onChange={(e) => {
                const movie = {format: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} >
                {formatOptionDisplay}
              </select>
            </div>
            <div>
              Genre: <select onChange={(e) => {
                const movie = {genre: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} >
                {movieGenreDisplay}
              </select>
            </div>
            <div>
              Plot Summary: <input onChange={(e) => {
                const movie = {plot: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Emotions:

              <Select
                multi
                options={emotionsArray}
                simpleValue
                value={movieEmotions}
                placeholder="Select how this movie makes you feel"
                onChange={this.handleSelectChange}
                />
            </div>

            <div>
              <MultiSelectField />
            </div>

            <div>
              Keywords: <input onChange={(e) => {
                const movie = {keywords: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <button>Create Movie!</button>
          </form>
        </div>
        <li><Link to={"/"}> return to movie list </Link></li>
      </div>

    );
  }
}

/*
handleEmotions(e.target.value);
// addEmotions();


  const movie = {emotions: movieEmotionsSelected};
  console.log("movieEmotionsSelected before " + movieEmotionsSelected);
  this.setState({
    movie: Object.assign(this.state.movie,movie)
    // movie: Object.assign(this.state.movie,movie)
  });
  console.log("movie.emotions: " + this.state.movie.emotions)
  console.log("movieEmotionsSelected after " + movieEmotionsSelected);

}}
*/

export default CreateMovieListing;
