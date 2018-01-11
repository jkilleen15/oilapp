import React, {Component} from "react";
import {Link} from "react-router-dom";
import MultiSelectField from "../components/MultiSelectField";
import oilGenres from "../oilGenres";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

class CreateOilListing extends Component {
  constructor() {
    super();
    this.state = {
      oil: {
        image: "",
        title: "",
        date: "",
        format: "",
        genre: "",
        plot: "",
        usage: [],
        keywords: "",
        oilGenres,
      },
    };
  }

  handleSelectChange2 (value) {
    console.log("You've selected:", value);
    this.setState({ usage: value });
    console.log("value: " + value);
    console.log("oil.usage: " + this.state.oil.usage);
    // handleUsage(value);
  }

  render() {
    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
    const usageArray = [
      // "happy", "sad", "regretful", "inspired", "uncomfortable", "melancholy"
    { label: "Happy", value: "happy" },
    { label: "Sad", value: "sad" },
    { label: "Regretful", value: "regretful" },
    { label: "Inspired", value: "inspired"},
    { label: "Uncomfortable", value: "uncomfortable" },
    { label: "Melancholy", value: "melancholy" },
    ];

    const oilUsage = [];
    const oilUsageSelected = [];

    const FLAVOURS = [
	{ label: "Chocolate", value: "chocolate" },
	{ label: "Vanilla", value: "vanilla" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Caramel", value: "caramel" },
	{ label: "Cookies and Cream", value: "cookiescream" },
	{ label: "Peppermint", value: "peppermint" },
];


const WHY_WOULD_YOU = [
	{ label: "Chocolate (are you crazy?)", value: "chocolate", disabled: true },
].concat(FLAVOURS.slice(1));


const MultiSelectField = createClass({

  displayName: "MultiSelectField",
  propTypes: {
    label: PropTypes.string,
  },

  getInitialState () {
    return {
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false,
      usage: [],
    };
  },

  handleSelectChange (value) {
    console.log("You\"ve selected:", value);
    this.setState({ value });
    console.log("value: " + value);
    handleUsage(value);
  },

  toggleCheckbox (e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  },
  toggleRtl (e) {
    let rtl = e.target.checked;
    this.setState({ rtl });
  },

  render () {
    const { crazy, disabled, stayOpen, value } = this.state;
    // const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
    console.log('special render: ' + this.state.oil.stayOpen);
    return (
      <div className="section">
        <Select
          closeOnSelect={!stayOpen}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange}
          options={FLAVOURS}
          // options={options}
          placeholder="Select your favourite(s) flavours!"
          removeSelected={this.state.removeSelected}
          rtl={this.state.rtl}
          simpleValue
          value={value}
        />
      </div>
    );
  }
});

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

// /* JUST NOW!!!
    function handleUsage(e) {
        console.log("target value " + e);
        // const oilUsage = [];
        // const oilUsage = [];
        oilUsage.push(e);
        console.log("oilUsage: " + oilUsage);
        addUsage(e);
    }

    function addUsage(e) {
      // oilUsageSelected.push(oilUsage);
      // console.log("oilUsageSelected: " + oilUsageSelected);
      const oil = {usage: e};
      // console.log("oilUsageSelected before " + oilUsageSelected);
      this.setState({
        oil: Object.assign(this.state.oil,oil)
        // oil: Object.assign(this.state.oil,oil)
      });
      console.log("oil.usage: " + this.state.oil.usage)
      // console.log("oilUsageSelected after " + oilUsageSelected);
    }
// END JUST NOW */


    /*
    Usage: <select multiple
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
    */

    return (
      <div>
        <div>
          <h1>Create a oil listing:</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createOil) {
              this.props.createOil(this.state.oil);
            }
          }}>
            <div>
            Oil Poster or Image URL (please enter a URL or leave empty, not required):
          <input onChange={(e) => {
            const oil = {image: e.target.value || ""};
            this.setState({
              oil: Object.assign(this.state.oil,oil)
            });
          }} />
            </div>
            <div>
              Oil Title: <input onChange={(e) => {
                const oil = {title: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} />
            </div>
            <div>
              Date watched: <input onChange={(e) => {
                const oil = {date: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} />
            </div>
            <div>
              Viewing Format(theater, redbox, netflix, etc.):
              <select onChange={(e) => {
                const oil = {format: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} >
                {formatOptionDisplay}
              </select>
            </div>
            <div>
              Genre: <select onChange={(e) => {
                const oil = {genre: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} >
                {oilGenreDisplay}
              </select>
            </div>
            <div>
              Plot Summary: <input onChange={(e) => {
                const oil = {plot: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} />
            </div>
            <div>
              Usage: <select multiple
                onChange={(e) => {
                //  handleUsage(e.target.value);
                //  addUsage();
                  /*
                  const oil = {usage: oilUsageSelected};
                  console.log("oilUsageSelected before " + oilUsageSelected);
                  this.setState({
                    oil: Object.assign(this.state.oil,oil)
                    // oil: Object.assign(this.state.oil,oil)
                  });
                  console.log("oil.usage: " + this.state.oil.usage)
                  console.log("oilUsageSelected after " + oilUsageSelected);
                  */
                }} >
                {emotionDisplay}
              </select>
            </div>

            <div>
              <MultiSelectField />
            </div>

            <div className="section">
              <Select
                // closeOnSelect={!stayOpen}
                // disabled={disabled}
                multi
                onChange={this.handleSelectChange}
                options={usageArray}
                // options={options}
                placeholder="Select your favourite(s) flavours!"
                removeSelected={this.state.removeSelected}
                rtl={this.state.rtl}
                simpleValue
                value={value}
              />
            </div>

            <div>
              Keywords: <input onChange={(e) => {
                const oil = {keywords: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} />
            </div>
            <button>Create Oil!</button>
          </form>
        </div>
        <li><Link to={"/"}> return to oil list </Link></li>
      </div>

    );
  }
}
export default CreateOilListing;
