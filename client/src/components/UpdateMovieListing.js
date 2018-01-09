import React, {Component} from "react";
import {Link} from "react-router-dom";

import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import Creatable from "react-select";
import "react-select/dist/react-select.css";

import movieGenres from "../movieGenres";

// AFTER UPDATE
// http://localhost:3101/update/undefined ???

// include these --> fallback/or || for display in case
// current state is empty/none were selected initially/or user deletes all selected choices during update
import oilTypeOptions from "../oilTypeOptions";
import warningOptions from "../warningOptions";
import emotionsOptions from "../emotionsOptions";
import applicationOptions from "../applicationOptions";
import bodySystemsOptions from "../bodySystemsOptions";
import propertiesOptions from "../propertiesOptions";

class UpdateMovieListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        id: this.props.movie._id || "",

        // image: this.props.movie.image [] "",
        // title: this.props.movie.title [] "",
        image: this.props.movie.image || [],
        title: this.props.movie.title || [],
        // emotions currently going in as simpleValue string from Select
        // so array.length = 1
        // oilType: this.props.movie.oilType || [],
        oilType: this.props.movie.oilType || [],
        warnings: this.props.movie.warnings || [],
        emotions: this.props.movie.emotions || [],
        application: this.props.movie.application || [],
        bodySystems: this.props.movie.bodySystems || [],
        properties: this.props.movie.properties || [],
        keywords: this.props.movie.keywords || [],
        // links: this.props.movie.title,
        links: this.props.movie.links || [],
        movieGenres,

        // these values moved from global state to per-movie, keep in mind for search
        oilTypeOptions: this.props.movie.oilTypeOptions || oilTypeOptions,
        warningOptions: this.props.movie.warningOptions || warningOptions,
        emotionsOptions: this.props.movie.emotionsOptions || emotionsOptions,
        applicationOptions: this.props.movie.applicationOptions || applicationOptions,
        bodySystemsOptions: this.props.movie.bodySystemsOptions || bodySystemsOptions,
        propertiesOptions: this.props.movie.propertiesOptions || propertiesOptions,

        keywordsOptions: this.props.movie.keywordsOptions || [],
        linksOptions: this.props.movie.linksOptions || [],
      },

      stayOpen: false,
      /*
      warningOptions,
      emotionsOptions: this.props.emotionsOptions,
      applicationOptions: this.props.applicationOptions,
      bodySystemsOptions: this.props.bodySystemsOptions,
      propertiesOptions: this.props.propertiesOptions,
      oilTypeOptions: this.props.oilTypeOptions,
      keywordsOptions: this.props.keywordsOptions,
      linksOptions: this.props.linksOptions,
      */
    };
  }
  // let displayName="";
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
  const stateName = {warnings: selectedOption || []};
  // LOOK HERE AT THIS EXTRA SAVE(?) IF NEW OBJECTS DON'T UPDATE CORRECTLY
  const displayName = {warningDisplay: selectedOption};
  this.setState({
    movie: Object.assign(this.state.movie,displayName)
  });
  // this.handleChange(selectedOption, stateName, keyword);
  console.log("displayName Updated!: " + displayName);
  this.handleChange(selectedOption, stateName);
  // console.log("emotions keyword: " + keyword);
  console.log("warnings Selected Option: " + selectedOption);
  }

  handleEmotionsChange = (selectedOption) => {
  // this.stateName = stateName;
  // const keyword = "emotions";
  const stateName = {emotions: selectedOption || []};
  // this.handleChange(selectedOption, stateName, keyword);
  this.handleChange(selectedOption, stateName);
  // console.log("emotions keyword: " + keyword);
  console.log("emotions Selected Option: " + selectedOption);
  }

  handleApplicationChange = (selectedOption) => {
  // this.stateName = stateName;
    // const keyword = "application";
    const stateName = {application: selectedOption || []};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("application Selected Option: " + selectedOption);
  }

  handleBodySystemsChange = (selectedOption) => {
  // this.stateName = stateName;
    // const keyword = "application";
    const stateName = {bodySystems: selectedOption || []};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("bodySystems Selected Option: " + selectedOption);
  }

  handlePropertiesChange = (selectedOption) => {
  // this.stateName = stateName;
    // const keyword = "application";
    const stateName = {properties: selectedOption || []};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("properties Selected Option: " + selectedOption);
  }

  handleKeywordsChange = (selectedOption) => {
  // this.stateName = stateName;
    // const keyword = "application";
    const stateName = {keywords: selectedOption || []};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("keywords Selected Option: " + selectedOption);
  }

  handleLinksChange = (selectedOption) => {
  // this.stateName = stateName;
    // const keyword = "application";
    const stateName = {links: selectedOption || []};
    // this.handleChange(selectedOption, stateName, keyword);
    this.handleChange(selectedOption, stateName);
    // console.log("application keyword: " + keyword);
    console.log("links Selected Option: " + selectedOption);
  }

  /////////

  handleChange = (selectedOption, stateName) => {
  // this.stateName = stateName;
  console.log("selectedOptions: " + selectedOption.toString());
  console.log("stateName: " + stateName);
  // console.log("displayName: " + displayName);
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
  console.log("this case was handled");
  }

  render() {

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


    // end for EasyMultiSelect
    console.log("movie props: ");
    console.log(this.props.movie);

    console.log("movie state: ");
    console.log(this.state.movie);

    // console.log("movie state: " + this.state.movie);
    /*
    console.log(this.props.movie.title);
    console.log("state image" + this.state.movie.image);
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
*/

    return (
      <div>
        <div>
          <h1>Update this oil listing:</h1>
          <form onSubmit={(e) => {
            // ???
            e.preventDefault();
            if (this.props.updateMovie) {
              this.props.updateMovie(this.state.movie);
            }
            // ??
          }}>
            Oil Poster or Image URL (please enter a URL or leave empty, not required):
            <div className="oilURLCreate">
              <input value={this.state.movie.image}
                onChange={(e) => {
                  const movie = {image: e.target.value || []};
                  this.setState({
                    movie: Object.assign(this.state.movie,movie)
                  });
                }} />
            </div>

            Oil Name:
            <div className="oilNameCreate">
              <input
                value={this.state.movie.title}
                onChange={(e) => {
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
                value={this.state.movie.oilType.toString()}
                // value={this.state.movie.oilType}
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
            <div className="warningsSelect">

                <Select.Creatable
                name="warnings"
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.movie.warnings.toString()}
                // value={this.state.movie.warnings.toString()}
                onChange={this.handleWarningsChange}
                // onInputChange
                multi
                allowCreate
                // onNewOptionClick
                // newOptionCreator
              //  newOptionCreator = { label: string, labelKey: string, valueKey: string }
              //  onNewOptionClick = function(option) {}
                closeOnSelect={this.state.stayOpen}
                simpleValue // / LOOK HERE!!
                // options={warningOptions}
                // options={this.state.warningOptions}
                options={this.state.movie.warningOptions}
                // options={this.state.movie.warnings}
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
                placeholder="Begin typing to add keywords..."
                // value={this.state.movie.links.toString()}
                value={this.state.movie.links.toString()}
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

            <button>Update This Listing! </button>
          </form>
        </div>
        <li><Link to={"/"}> return to movie list </Link></li>
      </div>

    );
  }
}
export default UpdateMovieListing;

/*
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
    // value={this.state.movie.emotions}
    // value={this.state.movie.value}
    // value={this.props.movie.emotions.toString()}
    value={this.state.movie.emotions.toString()}
    onChange={this.handleEmotionsChange}
    multi
    closeOnSelect={this.state.stayOpen}
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
*/
