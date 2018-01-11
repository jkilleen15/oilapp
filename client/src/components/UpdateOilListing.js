import React, {Component} from "react";
import {Link} from "react-router-dom";

import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import Creatable from "react-select";
import "react-select/dist/react-select.css";

// import movieGenres from "../movieGenres";

// AFTER UPDATE
// http://localhost:3101/update/undefined ???

// include these --> fallback/or || for display in case
// current state is empty/none were selected initially/or user deletes all selected choices during update
import oilTypeOptions from "../oilTypeOptions";
import warningOptions from "../warningOptions";
import usageOptions from "../usageOptions";
import applicationOptions from "../applicationOptions";
import bodySystemsOptions from "../bodySystemsOptions";
import propertiesOptions from "../propertiesOptions";

class UpdateOilListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oil: {
        id: this.props.oil._id,

        // image: this.props.oil.image [] "",
        // title: this.props.oil.title [] "",
        image: this.props.oil.image || [],
        title: this.props.oil.title || [],
        // usage currently going in as simpleValue string from Select
        // so array.length = 1
        // oilType: this.props.oil.oilType || [],
        oilType: this.props.oil.oilType || [],
        warnings: this.props.oil.warnings || [],
        usage: this.props.oil.usage || [],
        application: this.props.oil.application || [],
        bodySystems: this.props.oil.bodySystems || [],
        properties: this.props.oil.properties || [],
        keywords: this.props.oil.keywords || [],
        // links: this.props.oil.title,
        links: this.props.oil.links || [],
        // movieGenres,

        // these values moved from global state to per-oil, keep in mind for search
        oilTypeOptions: this.props.oil.oilTypeOptions || oilTypeOptions,
        warningOptions: this.props.oil.warningOptions || warningOptions,
        usageOptions: this.props.oil.usageOptions || usageOptions,
        applicationOptions: this.props.oil.applicationOptions || applicationOptions,
        bodySystemsOptions: this.props.oil.bodySystemsOptions || bodySystemsOptions,
        propertiesOptions: this.props.oil.propertiesOptions || propertiesOptions,

        keywordsOptions: this.props.oil.keywordsOptions || [],
        linksOptions: this.props.oil.linksOptions || [],
      },

      stayOpen: false,
      instructionsVisible: false,
      /*
      warningOptions,
      usageOptions: this.props.usageOptions,
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
  // const keyword = "usage";
  const stateName = {oilType: selectedOption || []};
  // this.handleChange(selectedOption, stateName, keyword);
  this.handleChange(selectedOption, stateName);
  // console.log("usage keyword: " + keyword);
  console.log("oilType Selected Option: " + selectedOption);
  }

  handleWarningsChange = (selectedOption) => {
  // this.stateName = stateName;
  // const keyword = "usage";
  const stateName = {warnings: selectedOption || []};
  // LOOK HERE AT THIS EXTRA SAVE(?) IF NEW OBJECTS DON'T UPDATE CORRECTLY
  const displayName = {warningDisplay: selectedOption};
  this.setState({
    oil: Object.assign(this.state.oil,displayName)
  });
  // this.handleChange(selectedOption, stateName, keyword);
  console.log("displayName Updated!: " + displayName);
  this.handleChange(selectedOption, stateName);
  // console.log("usage keyword: " + keyword);
  console.log("warnings Selected Option: " + selectedOption);
  }

  handleUsageChange = (selectedOption) => {
  // this.stateName = stateName;
  // const keyword = "usage";
  const stateName = {usage: selectedOption || []};
  // this.handleChange(selectedOption, stateName, keyword);
  this.handleChange(selectedOption, stateName);
  // console.log("usage keyword: " + keyword);
  console.log("usage Selected Option: " + selectedOption);
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
  // console.log("usage keyword name: " + keyword);
  // const stateName = keyword;
  // const oil = (`{${stateName}: selectedOption}`); moved to handleUsageChange
    // const oil = {usage: selectedOption};
    this.setState({
      oil: Object.assign(this.state.oil,stateName)
    });
  // console.log( `this.state.oil.${keyword}`);
  console.log(`Selected: ${selectedOption.toString()}`);
  console.log("this case was handled");
  }

  render() {

    console.log("STATE INFO:")
    console.log("oil title: " + this.state.oil.title);
    console.log("oil type: " + this.state.oil.oilType);
    console.log("warnings: " + this.state.oil.warnings);
    console.log("usage: " + this.state.oil.usage);
    console.log("application: " + this.state.oil.application);
    console.log("body systems: " + this.state.oil.bodySystems);
    console.log("properties: " + this.state.oil.properties);
    console.log("keywords: " + this.state.oil.keywords);
    console.log("links: " + this.state.oil.links);

    /*
    usageOptions,
    applicationOptions,
    bodySystemsOptions,
    propertiesOptions,
    oilTypeOptions,
    keywordsOptions: [],
    linksOptions: [], check on this format
    warningOptions
    */

    console.log("SELECTORDISPLAYINFO:")
    // console.log("oil title: " + this.state.oil.title);
    console.log("oil type options: " + this.state.oil.oilTypeOptions);
    console.log("warnings options: " + this.state.oil.warningOptions);
    console.log("usage options: " + this.state.oil.usageOptions);
    console.log("application options: " + this.state.oil.applicationOptions);
    console.log("body systems options: " + this.state.oil.bodySystemsOptions);
    console.log("properties options: " + this.state.oil.propertiesOptions);
    console.log("keywords options: " + this.state.oil.keywordsOptions);
    console.log("links options: " + this.state.oil.linksOptions);


    // end for EasyMultiSelect
    console.log("oil props: ");
    console.log(this.props.oil);

    console.log("oil state: ");
    console.log(this.state.oil);

    // SHOW OR HIDE INSTRUCTIONS

    let showInstructionButtonText = "";
    let instructionsDiv = "";
    if (this.state.instructionsVisible) {

      showInstructionButtonText = "Hide Instructions";

      instructionsDiv =
      <ul>
        <li> Click any field and begin typing to search or add custom values </li>
        <li> If you see your desired value, select it from dropdown to save </li>
        <li> To save custom values, press enter/return once value is complete</li>
        <li> Begin typing again to add the next value </li>
        <li> Enter values in search on Full Oil List page to retrieve this oil </li>
        <li><i> Note: For title and image url, pressing enter/return while in entry field will automatically update this oil.</i></li>


      </ul>;

    } else {
      showInstructionButtonText = "Show Instructions";
      instructionsDiv = "";
    }

    // console.log("oil state: " + this.state.oil);
    /*
    console.log(this.props.oil.title);
    console.log("state image" + this.state.oil.image);
    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
    const usageArray = ["happy", "sad", "regretful", "inspired", "uncomfortable"];

    const formatOptionDisplay = formatOptions.map((f,i) => (
      <option value={f} key={i}>{f}</option>
    ));

    const oilGenreDisplay = oilGenres.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));

    // "happy", "sad", "regretful", "inspired", "uncomfortable"
    const emotionDisplay = usageArray.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));

    // BONUS - dropdowns used for viewing format and oil genres
    //       - format dropdown pulls from local variable array
    //       - grenres dropdown utilizes oilGenres.js exported array
*/

    return (
      <div className="aLittleSpace">
        <div>
          <h1>Update this oil listing:</h1>
          <button onClick={() => {
            this.setState({
              instructionsVisible: !this.state.instructionsVisible
            });
          }
          }>
          {showInstructionButtonText}
        </button>
        {instructionsDiv}
          <form onSubmit={(e) => {
            // ???
            e.preventDefault();
            if (this.props.updateOil) {
              this.props.updateOil(this.state.oil);
            }
            // ??
          }}>
          <div className="oilURLCreate">
            <h4> Oil Poster or Image URL (enter complete url link to image for display):
              <input value={this.state.oil.image}
                onChange={(e) => {
                  const oil = {image: e.target.value || []};
                  this.setState({
                    oil: Object.assign(this.state.oil,oil)
                  });
                }} /></h4>
            </div>

            <div className="oilNameCreate">
              <h4>Oil Name:
              <input
                value={this.state.oil.title}
                onChange={(e) => {
                  const oil = {title: e.target.value || []};
                  this.setState({
                    oil: Object.assign(this.state.oil,oil)
                  });
                }} /></h4>
            </div>

            <h4> Oil Type (select one) </h4>
            <div className="oilTypeSelect">
              <Select
                name="oilType"
                value={this.state.oil.oilType.toString()}
                // value={this.state.oil.oilType}
                onChange={this.handleOilTypeChange}
                // multi
                closeOnSelect={!this.state.stayOpen}
                simpleValue
                // options={oilTypeOptions}

                // options={this.state.oilTypeOptions}
                options={this.state.oil.oilTypeOptions}
            />
            </div>

            <h4>Application (all that apply)</h4>
            <div className="applicationSelect">
              <Select.Creatable
                name="application"
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.oil.application.toString()}
                onChange={this.handleApplicationChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={applicationOptions}

                // options={this.state.applicationOptions}
                options={this.state.oil.applicationOptions}
            />
            </div>

            <h4>Warnings (all that apply)</h4>
            <div className="warningsSelect">

                <Select.Creatable
                name="warnings"
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.oil.warnings.toString()}
                // value={this.state.oil.warnings.toString()}
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
                options={this.state.oil.warningOptions}
                // options={this.state.oil.warnings}
             />

            </div>

            <h4>Usage (all that apply)</h4>
            <div className="usageSelect">
              <Select.Creatable
                name="usage" // option for sending to general handleChange?
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.oil.usage.toString()}
                onChange={this.handleUsageChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={usageOptions}
                // id="usage" // option for sending to general handleChange?

                // options={this.state.usageOptions}
                options={this.state.oil.usageOptions}
            />
            </div>

            <h4>Properties (all that apply)</h4>
            <div className="propertiesSelect">
              <Select.Creatable
                name="properties"
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.oil.properties.toString()}
                onChange={this.handlePropertiesChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={propertiesOptions}

                // options={this.state.propertiesOptions}
                options={this.state.oil.propertiesOptions}
            />
            </div>

            <h4>Body Systems Affected (all that apply)</h4>
            <div className="bodySystemsSelect">
              <Select.Creatable
                name="bodySystems"
                // value={value}
                placeholder="Click to select from list below or begin typing to add custom options..."
                value={this.state.oil.bodySystems.toString()}
                onChange={this.handleBodySystemsChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={bodySystemsOptions}

                // options={this.state.bodySystemsOptions}
                options={this.state.oil.bodySystemsOptions}
            />
            </div>

            <h4>Keywords</h4>

            <div className="keywordsCreate">
              <Select.Creatable
                name="keywords"
                // value={value}
                placeholder="Click and begin typing to add keywords..."
                value={this.state.oil.keywords.toString()}
                onChange={this.handleKeywordsChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={keywordsOptions}

                // options={this.state.keywordsOptions}
                options={this.state.oil.keywordsOptions}
            />
            </div>

            <h4>Links & References</h4>

            <div className="linksCreate">
              <Select.Creatable
                name="links"
                // value={value}
                placeholder="Click and begin typing to add http links..."
                // value={this.state.oil.links.toString()}
                value={this.state.oil.links.toString()}
                onChange={this.handleLinksChange}
                multi
                allowCreate
                closeOnSelect={this.state.stayOpen}
                simpleValue
                // options={linksOptions}

                // options={this.state.linksOptions}
                options={this.state.oil.linksOptions}
            />
            </div>

            <button><h3>Update This Listing!</h3></button>
          </form>
        </div>
        <h3><Link to={"/oil/" + this.state.oil.id}> Return to Oil Details! </Link></h3>
        <h3><Link to={"/"}> Return to Full Oil List </Link></h3>
      </div>

    );
  }
}
export default UpdateOilListing;

/*
<div>
  Date watched: <input value={this.state.oil.date}
    onChange={(e) => {
    const oil = {date: e.target.value};
    this.setState({
      oil: Object.assign(this.state.oil,oil)
    });
  }} />
</div>
<div>
  Viewing Format(theater, redbox, netflix, etc.):
  <select value={this.state.oil.format}
    onChange={(e) => {
    const oil = {format: e.target.value};
    this.setState({
      oil: Object.assign(this.state.oil,oil)
    });
  }} >
    {formatOptionDisplay}
  </select>
</div>
<div>
  Genre: <select value={this.state.oil.genre}
    onChange={(e) => {
    const oil = {genre: e.target.value};
    this.setState({
      oil: Object.assign(this.state.oil,oil)
    });
  }} >
    {oilGenreDisplay}
  </select>
</div>
<div>
  Plot Summary: <input value={this.state.oil.plot}
    onChange={(e) => {
    const oil = {plot: e.target.value};
    this.setState({
      oil: Object.assign(this.state.oil,oil)
    });
  }} />
</div>

<div className="EasyMultiSelect">
  <h4>Current Usage: {this.state.oil.usage}</h4>
  <Select
    name="form-field-name"
    // value={this.state.oil.usage}
    // value={this.state.oil.value}
    // value={this.props.oil.usage.toString()}
    value={this.state.oil.usage.toString()}
    onChange={this.handleUsageChange}
    multi
    closeOnSelect={this.state.stayOpen}
    simpleValue
    options={options}
/>

</div>

<div>
  Usage: <select multiple value={this.state.oil.usage}
    onChange={(e) => {
    //  const oil = {usage: e.target.value};
      const oilUsage = [];
      oilUsage.push(e.target.value);
      console.log("oilUsage: " + oilUsage);
      const oil = {usage: oilUsage};
      // console.log("oilUsage: " + oilUsage);
      console.log("oil: " + oil);
      this.setState({
        oil: Object.assign(this.state.oil,oil)
      });
    }} >
    {emotionDisplay}
  </select>
</div>
<div>
  Keywords: <input value={this.state.oil.keywords}
    onChange={(e) => {
    const oil = {keywords: e.target.value};
    this.setState({
      oil: Object.assign(this.state.oil,oil)
    });
  }} />
</div>
*/
