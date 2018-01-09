import React, {Component} from "react";
import {Link} from "react-router-dom";
// import MultiSelectField from "../components/MultiSelectField";
// import EasyMultiSelect from "../components/EasyMultiSelect";

import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import Creatable from "react-select";
import "react-select/dist/react-select.css";

import movieGenres from "../movieGenres";
// move options files into options folder and re-route below
import oilTypeOptions from "../oilTypeOptions";
import warningOptions from "../warningOptions";
import emotionsOptions from "../emotionsOptions";
import applicationOptions from "../applicationOptions";
import bodySystemsOptions from "../bodySystemsOptions";
import propertiesOptions from "../propertiesOptions";

class CreateMovieListing extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        id: "",
        image: [],
        title: [],
        // emotions currently going in as simpleValue string from Select
        // so array.length = 1

        // oilType: [],
        oilType: [],
        warnings: [],
        emotions: [],
        application: [], // !! ADD TO MODEL, UPDATE COMP
        bodySystems: [],
        properties: [],
        keywords: [],
        links: [],
        // links: "",
        movieGenres,
        // selectedOption: [], // here for now, but no longer used
        // value: [], // here for now, but no longer used

        // these values moved from global state to per-movie, keep in mind for search
        emotionsOptions,
        applicationOptions,
        bodySystemsOptions,
        propertiesOptions,
        oilTypeOptions,
        keywordsOptions: [],
        linksOptions: [],
        warningOptions
      },
      stayOpen: false,
      // emotionsDisplay: [],
      // warningOptions, // right now this adds to (global) state that applies now any time a new movie is CREATED
                      // consider benefits of adding like this -- how would a user remove unwanted global options
                      // should it just be applied to per-movie, movie-specific - how would this effect search functions
      /*
      emotionsOptions,
      applicationOptions,
      bodySystemsOptions,
      propertiesOptions,
      oilTypeOptions,
      keywordsOptions: [],
      linksOptions: [],
      */
      /*
      warningOptions: [
          { value: "Dilute", label: "Dilute" },
          { value: "Volatile", label: "Volatile" },
          { value: "Photosensitizing", label: "Photosensitizing" },
      ],
      */

      /*
      // for multi select feature - unused
      removeSelected: true,
      disabled: false,
      crazy: false,
      // stayOpen: false, // dup
      // value: [], // dup
      rtl: false,
      */
    };
    // this.handleChange = this.handleChange.bind(this);
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
    // this.stateName = stateName;
    console.log("selectedOption Emotions: " + selectedOption.toString());
    console.log("selectedOption id: " + selectedOption.name);
    // console.log("stateName: " + stateName);
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
  // this.stateName = stateName;
  // const keyword = "emotions";
  const stateName = {oilType: selectedOption || []};
  // this.handleChange(selectedOption, stateName, keyword);
  this.handleChange(selectedOption, stateName);
  // console.log("emotions keyword: " + keyword);
  console.log("oilType Selected Option: " + selectedOption);
  }

  handleWarningsChange = (selectedOption) => {
  // this.stateName = stateName;
  // const keyword = "emotions";
  const stateName = {warnings: selectedOption};
  // this.handleChange(selectedOption, stateName, keyword);
  this.handleChange(selectedOption, stateName);
  // console.log("emotions keyword: " + keyword);
  console.log("warnings Selected Option: " + selectedOption);
}

// SAVE! here is an opportunity to save all current selections to global selections
// may be helpful to user to be able to look up all i.e. keywords ever CREATED
// this would also be helpful when dev creating search functions,
    // rather than looping thru i.e. keywords of each user ???
// 1. initial entry pulls from file (initial options)
// 2. global keywordsOptions is updated with org + any CREATED
// 3. currently loads on last created options
// 4. perhaps
        // a. re-establish global option objects for applicable categories
        // b. on there own, or within movies object, on same level as movie
        // c. create a model?, controllers, mapStateToProps as needed
        // d. current global is searched, if new items no match, concat with current global
              // see code ref below for inspiration

// POTENTIAL REF FOR SHOWING NEWLY CREATED
// THIS WOULD BE WITHIN HANDLECHANGE
/*
const onChange = (selectedOption) => {
      console.log("Change Handler 1 : Selected: ", selectedOption);

      const newSelectedOptions = [].concat(warningOptions);
      // this will depend on how info out i.e. currently simple value
      selectedOption.forEach(selected => {
        const match = warningOptions.find(
          entry => (entry.value == selected.value));
        if (!match) {
        	newSelectedOptions.add(match);
        }
      });
      warningOptions = newSelectedOptions
      this.setState({
      movie: {
        warnings: [].concat(selectedOption),
      //  warningOptions: newSelectedOptions
        }
      });
    };
*/

  handleEmotionsChange = (selectedOption) => {
  // this.stateName = stateName;
  // const keyword = "emotions";
  const stateName = {emotions: selectedOption};
  // this.handleChange(selectedOption, stateName, keyword);
  this.handleChange(selectedOption, stateName);
  // console.log("emotions keyword: " + keyword);
  console.log("emotions Selected Option: " + selectedOption);
}

  handleApplicationChange = (selectedOption) => {
// this.stateName = stateName;
    // const keyword = "application";
    const stateName = {application: selectedOption};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("application Selected Option: " + selectedOption);
  }

  handleBodySystemsChange = (selectedOption) => {
// this.stateName = stateName;
    // const keyword = "application";
    const stateName = {bodySystems: selectedOption};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("bodySystems Selected Option: " + selectedOption);
  }

  handlePropertiesChange = (selectedOption) => {
// this.stateName = stateName;
    // const keyword = "application";
    const stateName = {properties: selectedOption};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("properties Selected Option: " + selectedOption);
  }

  handleKeywordsChange = (selectedOption) => {
// this.stateName = stateName;
    // const keyword = "application";
    const stateName = {keywords: selectedOption};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("keywords Selected Option: " + selectedOption);
  }

  handleLinksChange = (selectedOption) => {
// this.stateName = stateName;
    // const keyword = "application";
    const stateName = {links: selectedOption};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("keywords Selected Option: " + selectedOption);
  }

handleChange = (selectedOption, stateName) => {
// this.stateName = stateName;
console.log("selectedOptions: " + selectedOption.toString());
console.log("stateName: " + stateName);
// console.log("stateName: " + stateName);
// console.log("emotions keyword name: " + keyword);
// const stateName = keyword;
// const movie = (`{${stateName}: selectedOption}`); moved to handleEmotionsChange
  // const movie = {emotions: selectedOption};
  this.setState({
    movie: Object.assign(this.state.movie,stateName)
  });
// console.log( `this.state.movie.${keyword}`);
console.log(`Selected: ${selectedOption.toString()}`);
}

  // from EasyMultiSelect end

  render() {
    // for EasyMultiSelect
    console.log("STATE INFO:")
    console.log("oil title: " + this.state.movie.title);
    console.log("oil type: " + this.state.movie.oilType);
    console.log("warnings: " + this.state.movie.warnings);
    console.log("emotions: " + this.state.movie.emotions);
    console.log("application: " + this.state.movie.application);
    console.log("body systems: " + this.state.movie.bodySystems);
    console.log("properties: " + this.state.movie.properties);
    console.log("keywords: " + this.state.movie.keywords);
    console.log("links: " + this.state.movie.links);

    /*
    emotionsOptions,
    applicationOptions,
    bodySystemsOptions,
    propertiesOptions,
    oilTypeOptions,
    keywordsOptions: [],
    linksOptions: [], check on this format
    warningOptions
    */

    console.log("SELECTORDISPLAYINFO:")
    // console.log("oil title: " + this.state.movie.title);
    console.log("oil type options: " + this.state.movie.oilTypeOptions);
    console.log("warnings options: " + this.state.movie.warningOptions);
    console.log("emotions options: " + this.state.movie.emotionsOptions);
    console.log("application options: " + this.state.movie.applicationOptions);
    console.log("body systems options: " + this.state.movie.bodySystemsOptions);
    console.log("properties options: " + this.state.movie.propertiesOptions);
    console.log("keywords options: " + this.state.movie.keywordsOptions);
    console.log("links options: " + this.state.movie.linksOptions);

// REF https://github.com/JedWatson/react-select/issues/1663
// static arrays moved to state so newly created tags would appear in input field

//  const oilList

/*
const oilTypeOptions = [
    { value: "Single Oil", label: "Single Oil" },
    { value: "Oil Blend", label: "Oil Blend" },
  ];
*/

/*
  Oil Type
    - single oils
    - oil blend (two or more oils)
*/

/*
  const warningOptions = [
      { value: "Dilute", label: "Dilute" },
      { value: "Volatile", label: "Volatile" },
      { value: "Photosensitizing", label: "Photosensitizing" },
    ];
*/
/*
  Warnings
    - Dilute
    - Volatile
    - Photosensitizing
*/
/*
    const emotionsOptions = [
      { value: "stress", label: "Stress" },
      { value: "focus", label: "Focus" },
      { value: "fatigue", label: "Fatigue"},
      { value: "happiness", label: "Happiness" },
    ];
*/
/*
    const applicationOptions = [
      { value: "topical", label: "Topical" },
      { value: "aromatic", label: "Aromatic" },
      { value: "internal", label: "Internal"},
    ];
*/
/*
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

  */
/*
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
*/
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

    // const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
  //  const emotionsArray = [];

    // const emotionsArray = [
    //  "stress", "focus", "fatigue", "happiness"];
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


    return (
      <div>
        <div>
          <h1>Create a new oil listing:</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createMovie) {
              this.props.createMovie(this.state.movie);
            }
          }}>
            <div>
            Oil Poster or Image URL (please enter a URL or leave empty, not required):
          <input onChange={(e) => {
            // const movie = {image: e.target.value || ""};
            const movie = {image: e.target.value || []};
            this.setState({
              movie: Object.assign(this.state.movie,movie)
            });
          }} />
            </div>
            <div>
              Oil Name: <input onChange={(e) => {
                // const movie = {title: e.target.value};
                const movie = {title: e.target.value || []};
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
                // options={oilTypeOptions}

                // options={this.state.oilTypeOptions}
                options={this.state.movie.oilTypeOptions}
            />
          </div>

            Warnings (select all that apply)
            * Refresh to clear recently added options
            <div className="warningsSelect">

                <Select.Creatable
                name="warnings"
                // value={value}
                placeholder="Click to select from list, begin typing to search or add options..."
                value={this.state.movie.warnings.toString()}
                onChange={this.handleWarningsChange}
                // onInputChange
                multi
                allowCreate
                // onNewOptionClick
                // newOptionCreator
              //  newOptionCreator = { label: string, labelKey: string, valueKey: string }
              //  onNewOptionClick = function(option) {}
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // LLLOOOOK HERE!!! simpleValue
                // options={warningOptions}

                // options={this.state.warningOptions}
                options={this.state.movie.warningOptions}
             />

            </div>

            Emotions (select all that apply)
            <div className="emotionsSelect">
              <Select.Creatable
                name="emotions" // option for sending to general handleChange?
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.movie.emotions.toString()}
                onChange={this.handleEmotionsChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={emotionsOptions}
                // id="emotions" // option for sending to general handleChange?

                // options={this.state.emotionsOptions}
                options={this.state.movie.emotionsOptions}

            />
            </div>

            Application (select all that apply)
            <div className="applicationSelect">
              <Select.Creatable
                name="application"
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.movie.application.toString()}
                onChange={this.handleApplicationChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={applicationOptions}

                // options={this.state.applicationOptions}
                options={this.state.movie.applicationOptions}
            />
            </div>

            Body Systems Affected (select all that apply)
            <div className="bodySystemsSelect">
              <Select.Creatable
                name="bodySystems"
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.movie.bodySystems.toString()}
                onChange={this.handleBodySystemsChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={bodySystemsOptions}

                // options={this.state.bodySystemsOptions}
                options={this.state.movie.bodySystemsOptions}
            />
            </div>

            Properties (select all that apply):
            <div className="propertiesSelect">
              <Select.Creatable
                name="properties"
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.movie.properties.toString()}
                onChange={this.handlePropertiesChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={propertiesOptions}

                // options={this.state.propertiesOptions}
                options={this.state.movie.propertiesOptions}
            />
            </div>

            Keywords
            <ul>
              <li> Begin typing to add helpful keywords </li>
              <li> Press enter to save keyword </li>
              <li> Begin typing again to add additional keywords </li>
              <li> use keywords to retrieve oils </li>
            </ul>
            <div className="keywordsCreate">
              <Select.Creatable
                name="keywords"
                // value={value}
                placeholder="Begin typing to add keywords..."
                value={this.state.movie.keywords.toString()}
                onChange={this.handleKeywordsChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={keywordsOptions}

                // options={this.state.keywordsOptions}
                options={this.state.movie.keywordsOptions}
            />
            </div>

            Links & References
            <ul>
              <li> Begin typing to add http link </li>
              <li> Press enter to save your link </li>
              <li> Begin typing again to add additional http links </li>
            </ul>

            <div className="linksCreate">
              <Select.Creatable
                name="links"
                // value={value}
                placeholder="Begin typing to add links..."
                value={this.state.movie.links.toString()}
                // value={this.state.movie.links}
                onChange={this.handleLinksChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={linksOptions}

                // options={this.state.linksOptions}
                options={this.state.movie.linksOptions}
            />
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
