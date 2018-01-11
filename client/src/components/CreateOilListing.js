import React, {Component} from "react";
import {Link} from "react-router-dom";
// import createClass from "create-react-class";
// import PropTypes from "prop-types";
import Select from "react-select";
// import Creatable from "react-select";
import "react-select/dist/react-select.css";

// TODO move options files into options folder and re-route below
import oilTypeOptions from "../oilTypeOptions";
import warningOptions from "../warningOptions";
import usageOptions from "../usageOptions";
import applicationOptions from "../applicationOptions";
import bodySystemsOptions from "../bodySystemsOptions";
import propertiesOptions from "../propertiesOptions";

class CreateOilListing extends Component {
  constructor() {
    super();
    this.state = {
      oil: {
        id: "",
        image: [],
        title: [],
        // usage currently going in as simpleValue string from Select
        // so array.length = 1

        oilType: [],
        warnings: [],
        usage: [],
        application: [],
        bodySystems: [],
        properties: [],
        keywords: [],
        links: [],
        // links: "",

        // selectedOption: [], // here for now, but no longer used
        // value: [], // here for now, but no longer used

        // these values moved from global state to per-oil, keep in mind for search
        usageOptions,
        applicationOptions,
        bodySystemsOptions,
        propertiesOptions,
        oilTypeOptions,
        keywordsOptions: [],
        linksOptions: [],
        warningOptions
      },
      stayOpen: false,
      instructionsVisible: false,
      // warningOptions, // right now this adds to (global) state that applies now any time a new oil is CREATED
                      // consider benefits of adding like this -- how would a user remove unwanted global options
                      // should it just be applied to per-oil, oil-specific - how would this effect search functions

    };
    // this.handleChange = this.handleChange.bind(this);
  }

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
  const stateName = {warnings: selectedOption};
  // this.handleChange(selectedOption, stateName, keyword);
  this.handleChange(selectedOption, stateName);
  // console.log("usage keyword: " + keyword);
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
        // b. on there own, or within oils object, on same level as oil
        // c. create a model?, controllers, mapStateToProps as needed
        // d. current global is searched, if new items no match, concat with current global
              // see code ref below for inspiration

  handleUsageChange = (selectedOption) => {
  // this.stateName = stateName;
  // const keyword = "usage";
  const stateName = {usage: selectedOption};
  // this.handleChange(selectedOption, stateName, keyword);
  this.handleChange(selectedOption, stateName);
  // console.log("usage keyword: " + keyword);
  console.log("usage Selected Option: " + selectedOption);
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
// console.log("usage keyword name: " + keyword);
// const stateName = keyword;
// const oil = (`{${stateName}: selectedOption}`); moved to handleUsageChange
  // const oil = {usage: selectedOption};
  this.setState({
    oil: Object.assign(this.state.oil,stateName)
  });
// console.log( `this.state.oil.${keyword}`);
console.log(`Selected: ${selectedOption.toString()}`);
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
    console.log("oil type options: " + this.state.oil.oilTypeOptions);
    console.log("warnings options: " + this.state.oil.warningOptions);
    console.log("usage options: " + this.state.oil.usageOptions);
    console.log("application options: " + this.state.oil.applicationOptions);
    console.log("body systems options: " + this.state.oil.bodySystemsOptions);
    console.log("properties options: " + this.state.oil.propertiesOptions);
    console.log("keywords options: " + this.state.oil.keywordsOptions);
    console.log("links options: " + this.state.oil.linksOptions);

    // HIDE OR SHOW INSTRUCTIONS
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
        <li><i> Note: For title and image url, pressing enter/return while in entry field will automatically create an oil. Enter value and move to next field without pressing enter/return to avoid extraneous entries.</i></li>
      </ul>;

    } else {
      showInstructionButtonText = "Show Instructions";
      instructionsDiv = "";
    }

    ////

// static arrays moved to state so newly created tags would appear in input field

    return (
      <div className="aLittleSpace">
        <div>
          <h1>Create a new oil listing:</h1>
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
            e.preventDefault();
            if (this.props.createOil) {
              this.props.createOil(this.state.oil);
            }
          }}>
            <div>
              <h4>Oil Name: <input onChange={(e) => {
                // const oil = {title: e.target.value};
                const oil = {title: e.target.value || []};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} /></h4>
            </div>

            <div>
            <h4> Oil Image URL (enter complete url link to image for display):
          <input onChange={(e) => {
            // const oil = {image: e.target.value || ""};
            const oil = {image: e.target.value || []};
            this.setState({
              oil: Object.assign(this.state.oil,oil)
            });
          }} /></h4>
            </div>

            <h4>Oil Type (select one)</h4>
            <div className="oilTypeSelect">
              <Select
                name="oilType"
                // value={value}
                value={this.state.oil.oilType.toString()}
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

            <h4>Warnings (all that apply)<br /></h4>
            * Refresh to clear recently added options
            <div className="warningsSelect">

                <Select.Creatable
                name="warnings"
                // value={value}
                placeholder="Click to select from list, begin typing to search or add options..."
                value={this.state.oil.warnings.toString()}
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
                options={this.state.oil.warningOptions}
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

            <h4>Keywords:</h4>
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
                value={this.state.oil.links.toString()}
                // value={this.state.oil.links}
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
            <div>
              <button><h3>Create Oil!</h3></button>
            </div>
          </form>
        </div>
        <h3><Link to={"/"}> Return to Full Oil List </Link></h3>
      </div>

    );
  }
}

export default CreateOilListing;
