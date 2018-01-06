import React, {Component} from "react";
import {Link} from "react-router-dom";
import multiSelect from "../components/MultiSelect"
import movieGenres from "../movieGenres";
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
        emotions: "",
        keywords: "",
        movieGenres,
      },
    };
  }

  render() {
    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
    const emotionsArray = ["happy", "sad", "regretful", "inspired", "uncomfortable"];
    const movieEmotions = [];
    const movieEmotionsSelected = [];

    // /

    const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));

    const { crazy, disabled, stayOpen, value } = this.state;
    const options = crazy ? WHY_WOULD_YOU : FLAVOURS;

    const formatOptionDisplay = formatOptions.map((f,i) => (
      <option value={f} key={i}>{f}</option>
    ));

    const movieGenreDisplay = movieGenres.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));

    // "happy", "sad", "regretful", "inspired", "uncomfortable"
    const emotionsDisplay = emotionsArray.map((em,i) => (
      <option value={em} key={i}>{em}</option>
    ));

    const emotionsDisplay2 = emotionsArray.map((em2,i) => (
      <option key={i} type="checkbox" className="checkbox-control"
             name="removeSelected" checked={this.state.removeSelected}
             onChange={this.handleEmotions} value={em2}> {em2} </option>
    ));

    // <input type="checkbox" className="checkbox-control" name="removeSelected" checked={this.state.removeSelected} onChange={this.handleEmotions} />
    // <span className="checkbox-label">Remove selected options</span>

    function handleEmotions(e) {
        console.log("target value " + e);
        // const movieEmotions = [];
        // const movieEmotions = [];
        movieEmotions.push(e);
        console.log("movieEmotions: " + movieEmotions);
        movieEmotionsSelected.push(movieEmotions);
        console.log("movieEmotionsSelected: " + movieEmotionsSelected);
    }

    // BONUS - dropdowns used for viewing format and movie genres
    //       - format dropdown pulls from local variable array
    //       - grenres dropdown utilizes movieGenres.js exported array

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
              Emotions: <select multiple
                value={["happy", "sad", "regretful", "inspired", "uncomfortable"]}

                /*
                {emotionsDisplay}
              </select>
                </div>
                */

                // onChange={(e) => {
                onChange={(e) => {
                //  const movie = {emotions: e.target.value};
                // const movie = {emotions: []};
                // const movieEmotionsSelected = [];
                  // const movieEmotions = [];
                  // movieEmotionsSelected.push(e.target.value);
                //  console.log("movieEmotions: " + movieEmotionsSelected);
                  // const movie = {emotions: movieEmotions};
                  // console.log("movieEmotions: " + movieEmotions);
                  // console.log("movie: " + movie);
                  handleEmotions(e.target.value);
                  const movie = {emotions: movieEmotionsSelected};
                  console.log("movieEmotionsSelected before " + movieEmotionsSelected);
                  this.setState({
                    movie: Object.assign(this.state.movie,movie)
                    // movie: Object.assign(this.state.movie,movie)
                  });
                  console.log("movie.emotions: " + this.state.movie.emotions)
                  console.log("movieEmotionsSelected after " + movieEmotionsSelected);
                }} >
                {emotionsDisplay2}
              </select>
                </div>


                <div className="section">



				<div className="checkbox-list">
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="removeSelected" checked={this.state.removeSelected} onChange={this.handleEmotions} />
						<span className="checkbox-label">Remove selected options</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.handleEmotions} />
						<span className="checkbox-label">Disable the control</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="crazy" checked={crazy} onChange={this.handleEmotions} />
						<span className="checkbox-label">I don't like Chocolate (disabled the option)</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="stayOpen" checked={stayOpen} onChange={this.handleEmotions} />
						<span className="checkbox-label">Stay open when an Option is selected</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="rtl" checked={this.state.rtl} onChange={this.handleEmotions} />
						<span className="checkbox-label">rtl</span>
					</label>
				</div>
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
export default CreateMovieListing;
