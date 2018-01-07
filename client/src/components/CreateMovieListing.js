import React, {Component} from "react";
import {Link} from "react-router-dom";
// import MultiSelectField from "../components/MultiSelectField";
// import EasyMultiSelect from "../components/EasyMultiSelect";
import movieGenres from "../movieGenres";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import Creatable from "react-select";
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
        genre: [],
        plot: "",
        // emotions currently going in as simpleValue string from Select
        // so array.length = 1
        oilType: "",
        warnings: [],
        emotions: [],
        application: [], // !! ADD TO MODEL, UPDATE COMP
        bodySystems: [],
        properties: [],
        // keywords: "",
        movieGenres,
        // selectedOption: [], // here for now, but no longer used
        // value: [], // here for now, but no longer used
      },
      stayOpen: false,
      // emotionsDisplay: [],


      // for multi select feature
      removeSelected: true,
      disabled: false,
      crazy: false,
      // stayOpen: false, // dup
      // value: [], // dup
      rtl: false,
    };
    //this.handleChange = this.handleChange.bind(this);
  }
/*
// FULL with old notes
  handleEmotionsChange = (selectedOption) => {
    // 1 const selectedEmotions = [];
    console.log("selectedOption: " + selectedOption.toString()); // not selectedOption.value
    // 2 this.setState({ selectedOption });
    // 3 this.setState({ value: selectedOption});
    // 4 selectedEmotions.push(selectedOption);
    // 5 console.log("selectedEmotionsArray: " + selectedEmotions)
    // 6, switch to below, const movie = {emotions: selectedEmotions};
    const movie = {emotions: selectedOption};
    this.setState({
      movie: Object.assign(this.state.movie,movie)
    });
    console.log(`Selected: ${selectedOption.toString()}`);
  }
  */

  // cleaned up
/*
  handleEmotionsChange = (selectedOption) => {
    // this.className = className;
    console.log("selectedOption Emotions: " + selectedOption.toString());
    console.log("selectedOption id: " + selectedOption.name);
    // console.log("className: " + className);
    // console.log("emotions keyword name: " + keyword);

    const movie = {emotions: selectedOption};
    this.setState({
      movie: Object.assign(this.state.movie,movie)
    });
    console.log(`Selected: ${selectedOption.toString()}`);
  }

  // this can be used for all changes if
// emotions, application (the name of the state categorie can be sent as variable)

  handleApplicationChange = (selectedOption) => {
    console.log("selectedOption Application: " +
    selectedOption.toString()); // not selectedOption.value
    const movie = {application: selectedOption};
    this.setState({
      movie: Object.assign(this.state.movie,movie)
    });
    console.log(`Selected: ${selectedOption.toString()}`);
  }

*/

  handleOilTypeChange = (selectedOption) => {
  // this.className = className;
  // const keyword = "emotions";
  const className = {oilType: selectedOption};
  // this.handleChange(selectedOption, className, keyword);
  this.handleChange(selectedOption, className);
  // console.log("emotions keyword: " + keyword);
  console.log("oilType Selected Option: " + selectedOption);
  }

  handleWarningsChange = (selectedOption) => {
  // this.className = className;
  // const keyword = "emotions";
  const className = {warnings: selectedOption};
  // this.handleChange(selectedOption, className, keyword);
  this.handleChange(selectedOption, className);
  // console.log("emotions keyword: " + keyword);
  console.log("warnings Selected Option: " + selectedOption);
}

// POTENTIAL REF FOR SHOWING NEWLY CREATED
// THIS WOULD BE WITHIN HANDLECHANGE
/*
const onChange = (selectedOption) => {
      console.log("Change Handler 1 : Selected: ", selectedOption);

      const newSelectedOptions = [].concat(warningsOptions);
      // this will depend on how info out i.e. currently simple value
      selectedOption.forEach(selected => {
        const match = warningsOptions.find(
          entry => (entry.value == selected.value));
        if (!match) {
        	newSelectedOptions.add(match);
        }
      });
      warningsOptions = newSelectedOptions
      this.setState({
      movie: {
        warnings: [].concat(selectedOption),
      //  warningsOptions: newSelectedOptions
        }
      });
    };
*/

  handleEmotionsChange = (selectedOption) => {
  // this.className = className;
  // const keyword = "emotions";
  const className = {emotions: selectedOption};
  // this.handleChange(selectedOption, className, keyword);
  this.handleChange(selectedOption, className);
  // console.log("emotions keyword: " + keyword);
  console.log("emotions Selected Option: " + selectedOption);
}

  handleApplicationChange = (selectedOption) => {
// this.className = className;
    // const keyword = "application";
    const className = {application: selectedOption};
    // this.handleChange(selectedOption, className, keyword);
    this.handleChange(selectedOption, className);
    // console.log("application keyword: " + keyword);
    console.log("application Selected Option: " + selectedOption);
  }

  handleBodySystemsChange = (selectedOption) => {
// this.className = className;
    // const keyword = "application";
    const className = {bodySystems: selectedOption};
    // this.handleChange(selectedOption, className, keyword);
    this.handleChange(selectedOption, className);
    // console.log("application keyword: " + keyword);
    console.log("bodySystems Selected Option: " + selectedOption);
  }

  handlePropertiesChange = (selectedOption) => {
// this.className = className;
    // const keyword = "application";
    const className = {properties: selectedOption};
    // this.handleChange(selectedOption, className, keyword);
    this.handleChange(selectedOption, className);
    // console.log("application keyword: " + keyword);
    console.log("properties Selected Option: " + selectedOption);
  }

handleChange = (selectedOption, className) => {
// this.className = className;
console.log("selectedOptions: " + selectedOption.toString());
console.log("className: " + className);
// console.log("className: " + className);
// console.log("emotions keyword name: " + keyword);
// const stateName = keyword;
// const movie = (`{${stateName}: selectedOption}`); moved to handleEmotionsChange
  // const movie = {emotions: selectedOption};
  this.setState({
    movie: Object.assign(this.state.movie,className)
  });
// console.log( `this.state.movie.${keyword}`);
console.log(`Selected: ${selectedOption.toString()}`);
}

  // from EasyMultiSelect end

  handleSelectChange(value) {
    this.getInitialState();
    console.log("You\"ve selected:", value);
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

  render() {
    // for EasyMultiSelect
    console.log("oil type: " + this.state.movie.oilType);
    console.log("warnings: " + this.state.movie.warnings);
    console.log("emotions: " + this.state.movie.emotions);
    console.log("application: " + this.state.movie.application);
    console.log("body systems: " + this.state.movie.bodySystems);
    console.log("properties: " + this.state.movie.properties);

  //  const oilList

  const oilTypeOptions = [
      { value: "Single Oil", label: "Single Oil" },
      { value: "Oil Blend", label: "Oil Blend" },
    ];

/*
    Oil Type
      - single oils
      - oil blend (two or more oils)
*/

  const warningsOptions = [
      { value: "Dilute", label: "Dilute" },
      { value: "Volatile", label: "Volatile" },
      { value: "Photosensitizing", label: "Photosensitizing" },
    ];

/*
  Warnings
    - Dilute
    - Volatile
    - Photosensitizing
*/

    const emotionsOptions = [
      { value: "stress", label: "Stress" },
      { value: "focus", label: "Focus" },
      { value: "fatigue", label: "Fatigue"},
      { value: "happiness", label: "Happiness" },
    ];

    const applicationOptions = [
      { value: "topical", label: "Topical" },
      { value: "aromatic", label: "Aromatic" },
      { value: "internal", label: "Internal"},
    ];

    const bodySystemsOptions = [
      { value: "cardiovascular system", label: "Cardiovascular System" },
      { value: "digestive system", label: "Digestive System" },
      { value: "emotional balance", label: "Emotional Balance"},
      { value: "hormonal system", label: "Hormonal System" },
      { value: "immune system", label: "Immune System" },
      { value: "muscles and bones", label: "Muscles and Bones" },
      { value: "nervous system", label: "Nervous System"},
      { value: "respiratory system", label: "Respiratory System" },
      { value: "skin and hair", label: "Skin and Hair" },
    ];

    const propertiesOptions = [
      { value: "Antibacterial", label: "Antibacterial" },
      { value: "Anticatarrhal", label: "Anticatarrhal" },
      { value: "Antidepressant", label: "Antidepressant"},
      { value: "Antifungal", label: "Antifungal" },
      { value: "Anti-infectious", label: "Anti-infectious" },
      { value: "Anti-inflammatory", label: "Anti-inflammatory" },
      { value: "Antimicrobial", label: "Antimicrobial"},
      { value: "Antiparasitic", label: "Antiparasitic" },
      { value: "Antirheumatic", label: "Antirheumatic" },
      { value: "Antiseptic", label: "Antiseptic" },
      { value: "Antispasmodic", label: "Antispasmodic" },
      { value: "Antiviral", label: "Antiviral"},
      { value: "Analgesic", label: "Analgesic" },
      { value: "Immune-stimulant", label: "Immune-stimulant" },
    ];

/*
    Properties (choose from):
      - Antibacterial
      - Anticatarrhal
      - Antidepressant
      - Antifungal
      - Anti-infectious
      - Anti-inflammatory
      - Antimicrobial
      - Antiparasitic
      - Antirheumatic
      - Antiseptic
      - Antispasmodic
      - Antiviral
      - Analgesic
      - Immune-stimulant
*/

/*
    Body Systems Affected (choose from)
      - Cardiovascular System
      - Digestive System
      - Emotional Balance
      - Hormonal System
      - Immune System
      - Muscles and Bones
      - Nervous System
      - Respiratory System
      - Skin and Hair
*/
    // end for EasyMultiSelect

    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
  //  const emotionsArray = [];

    const emotionsArray = [
      "stress", "focus", "fatigue", "happiness"];
/*
    { label: "Happy", value: "happy" },
    { label: "Sad", value: "sad" },
    { label: "Regretful", value: "regretful" },
    { label: "Inspired", value: "inspired"},
    { label: "Uncomfortable", value: "uncomfortable" },
    { label: "Melancholy", value: "melancholy" },
    ];
    */

    // const movieEmotions = [];
    // const movieEmotionsSelected = [];

    // save for later - trying to dynamically generate arrays, is it possible

    /*
    // SEE NPM
    Async options
    If you want to load options asynchronously, use the Async export
    and provide a loadOptions Function.

    The function takes two arguments String input,
    Function callbackand will be called when the input text is changed.
    */
    /*
    const { emotionsDisplay } = this.state;
    const emotionsDisplayPrep = emotionsArray.map((g,i) => (
      // emotionsDisplay.push(`{value:"${g}", label:"${g}", key:"${i}"}`)
      emotionsDisplay.push(`{value: "${g}", label: "${g}"}`)
    ));
    console.log("emotionsDisplayPrep: " + emotionsDisplayPrep);
    console.log("emotionsDisplay: " + emotionsDisplay);
    */

    const genreFruitSelected = [];

    const formatOptionDisplay = formatOptions.map((f,i) => (
      <option value={f} key={i}>{f}</option>
    ));

    const movieGenreDisplay = movieGenres.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));




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
                console.log("e: " + e.target.value);
                const movie = {format: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} >
                {formatOptionDisplay}
              </select>
            </div>
            <div>
              Genre:
                {movieGenreDisplay}

            </div>
            <div>
              Plot Summary: <input onChange={(e) => {

                const movie = {plot: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>

            Oil Type (Select One)
            <div className="oilTypeSelect">
              <Select
                name="oilType"
                // value={value}
                value={this.state.movie.oilType.toString()}
                onChange={this.handleOilTypeChange}
                // multi
                closeOnSelect={!this.state.stayOpen}
                simpleValue
                // options={emotionsOptions}
                options={oilTypeOptions}
            />
            </div>

            Warnings (select all that apply)
            <div className="warningsSelect">
              <Select.Creatable
                name="warnings"
                // value={value}
                value={this.state.movie.warnings.toString()}
                onChange={this.handleWarningsChange}
                multi
                allowCreate
                // newOptionCreator
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={emotionsOptions}
                options={warningsOptions}
            />
            </div>

            Emotions (select all that apply)
            <div className="emotionsSelect">
              <Select
                name="emotions" // option for sending to general handleChange?
                // value={value}
                value={this.state.movie.emotions.toString()}
                onChange={this.handleEmotionsChange}
                multi
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={emotionsOptions}
                options={emotionsOptions}
                // id="emotions" // option for sending to general handleChange?
            />
            </div>

            Application (select all that apply)
            <div className="applicationSelect">
              <Select
                name="application"
                // value={value}
                value={this.state.movie.application.toString()}
                onChange={this.handleApplicationChange}
                multi
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={emotionsOptions}
                options={applicationOptions}
            />
            </div>

            Body Systems Affected (select all that apply)
            <div className="bodySystemsSelect">
              <Select
                name="bodySystems"
                // value={value}
                value={this.state.movie.bodySystems.toString()}
                onChange={this.handleBodySystemsChange}
                multi
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={emotionsOptions}
                options={bodySystemsOptions}
            />
            </div>

            Properties (select all that apply):
            <div className="propertiesSelect">
              <Select
                name="properties"
                // value={value}
                value={this.state.movie.properties.toString()}
                onChange={this.handlePropertiesChange}
                multi
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={emotionsOptions}
                options={propertiesOptions}
            />
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

<select onChange={(e) => {
  const movie = {genre: e.target.value};
  this.setState({
    movie: Object.assign(this.state.movie,movie)
  });
}} >
</select>
*/

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

////////////
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
*/

export default CreateMovieListing;
