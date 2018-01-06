import React, {Component} from "react";
import {Link} from "react-router-dom";
import movieGenres from "../movieGenres";
import Select from "react-select";
import "react-select/dist/react-select.css";

class UpdateMovieListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        id: this.props.movie._id,
        image: this.props.movie.image,
        title: this.props.movie.title,
        date: this.props.movie.date,
        format: this.props.movie.format,
        genre: this.props.movie.genre,
        plot: this.props.movie.plot,
        emotions: this.props.movie.emotions,
        keywords: this.props.movie.keywords,
        movieGenres,
        selectedOption: this.props.movie.selectedOption,
        value: this.props.movie.emotions,
      },
      // for EasyMultiSelect
      // selectedOption: this.props.selectedOption,
      stayOpen: false,
      // value: this.props.movie.emotions,
      // for multi select feature
      //  removeSelected: true,
      //  disabled: false,
      //  crazy: false,
      // stayOpen: false,
      // value: [],
      // rtl: false,
    };
  }

  // componentDidMount() {
  //  const thisMovieId = this.props.match.params.id;
  //  this.props.getMovie(thisMovieId);
  // }

  // from EasyMultiSelect

  // simplified function
  handleEmotionsChange = (selectedOption) => {
    // const selectedEmotions = [];
    console.log("initial selectedOption.value: " + selectedOption.value);
    this.setState({ selectedOption });
    this.setState({ emotions: selectedOption});
    // this.setState({ value: selectedOption});
    // selectedEmotions.push(selectedOption);
    // console.log("selectedEmotionsArray: " + selectedEmotions)
    // const movie = {emotions: selectedEmotions};
    // this.setState({
    // movie: Object.assign(this.state.movie,movie)
    // });
    console.log(`Selected: ${selectedOption}`);
  }

  /* OLD FUNCTION
    handleEmotionsChange = (selectedOption) => {
      const selectedEmotions = [];
      console.log("selectedOption.value: " + selectedOption.value);
      this.setState({ selectedOption });
      this.setState({ value: selectedOption});
      selectedEmotions.push(selectedOption);
      console.log("selectedEmotionsArray: " + selectedEmotions)
      const movie = {emotions: selectedEmotions};
      this.setState({
      movie: Object.assign(this.state.movie,movie)
      });
      console.log(`Selected: ${selectedOption}`);
    }
    */

    // from EasyMultiSelect end

  render() {

    // for EasyMultiSelect
    console.log("this.state.movie.emotions" + this.state.movie.emotions);
    console.log("value: " + this.state.movie.value)
    console.log("selectedOption: " + this.state.movie.selectedOption)
    console.log("emotions: " + this.state.movie.emotions)
    // console.log("value: " + value.value)
    const { selectedOption, value, stayOpen, movie, emotions } = this.state;
    const options = [
      { value: "stress", label: "Stress" },
      { value: "focus", label: "Focus" },
      { value: "fatigue", label: "Fatigue"},
      { value: "happiness", label: "Happiness" },
    ];

    // end for EasyMultiSelect

    console.log(this.props.movie);
    console.log(this.props.movie.title);
    console.log("state image" + this.state.movie.image);
    console.log("selectedOption: " + this.state.selectedOption);
    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
    const emotionsArray = ["happy", "sad", "regretful", "inspired", "uncomfortable"];

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

    return (
      <div>
        <div>
          <h1>Update this movie listing:</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.updateMovie) {
              this.props.updateMovie(this.state.movie);
            }
          }}>
            <div>
            Movie Poster or Image URL (please enter a URL or leave empty, not required):
          <input value={this.state.movie.image}
            onChange={(e) => {
            const movie = {image: e.target.value || ""};
            this.setState({
              movie: Object.assign(this.state.movie,movie)
            });
          }} />
            </div>
            <div>
              Movie Title: <input value={this.state.movie.title}
                onChange={(e) => {
                const movie = {title: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Date watched: <input value={this.state.movie.date}
                onChange={(e) => {
                const movie = {date: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Viewing Format(theater, redbox, netflix, etc.):
              <select value={this.state.movie.format}
                onChange={(e) => {
                const movie = {format: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} >
                {formatOptionDisplay}
              </select>
            </div>
            <div>
              Genre: <select value={this.state.movie.genre}
                onChange={(e) => {
                const movie = {genre: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} >
                {movieGenreDisplay}
              </select>
            </div>
            <div>
              Plot Summary: <input value={this.state.movie.plot}
                onChange={(e) => {
                const movie = {plot: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>

            <div className="EasyMultiSelect">
              <h4>Current Emotions: {this.state.movie.emotions}</h4>
              <Select
                name="form-field-name"
                value={value}
                // value={value}
                onChange={this.handleEmotionsChange}
                multi
                closeOnSelect={stayOpen}
                simpleValue
                options={options}
            />

          </div>

            <div>
              Emotions: <select multiple value={this.state.movie.emotions}
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
                {emotionDisplay}
              </select>
            </div>
            <div>
              Keywords: <input value={this.state.movie.keywords}
                onChange={(e) => {
                const movie = {keywords: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <button>Update This Listing! </button>
          </form>
        </div>
        <li><Link to={"/"}> return to movie list </Link></li>
      </div>

    );
  }
}
export default UpdateMovieListing;
