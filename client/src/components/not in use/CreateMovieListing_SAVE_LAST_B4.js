import React, {Component} from "react";
import {Link} from "react-router-dom";
// import MultiSelectField from "../components/MultiSelectField";
// import EasyMultiSelect from "../components/EasyMultiSelect";
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
        genre: [],
        plot: "",
        // usage currently going in as simpleValue string from Select
        // so array.length = 1
        usage: [],
        keywords: "",
        oilGenres,
        // selectedOption: [], // here for now, but no longer used
        // value: [], // here for now, but no longer used
      },
      // for EasyMultiSelect
      // selectedOption: [], // moved to oil-specific
      stayOpen: false,
      // value: [],// moved to oil-specific for temp, then remove and switch to specific prop

      // for multi select feature
      removeSelected: true,
      disabled: false,
      crazy: false,
      // stayOpen: false, // dup
      // value: [], // dup
      rtl: false,
    };
  }
/*
  getInitialState () {
  return {
    removeSelected: true,
    disabled: false,
    crazy: false,
    stayOpen: false,
    value: [],
    rtl: false,
    usage: this.state.oil.usage,
  };
}
*/

// from EasyMultiSelect

// SIMPLIFIED FUNCTION
/*
  handleUsageChange = (selectedOption) => {
  // const selectedUsage = [];
    console.log("initial selectedOption.value: " + selectedOption.value);
    this.setState({ selectedOption });
    this.setState({ usage: selectedOption});
  // this.setState({ value: selectedOption});
  // selectedUsage.push(selectedOption);
  // console.log("selectedUsageArray: " + selectedUsage)
  // const oil = {usage: selectedUsage};
  // this.setState({
  // oil: Object.assign(this.state.oil,oil)
  // });
    console.log(`Selected: ${selectedOption}`);
  }
*/
// OLD FUNCTION
  handleUsageChange = (selectedOption) => {
    // 1 const selectedUsage = [];
    console.log("selectedOption: " + selectedOption.toString()); // not selectedOption.value
    // 2 this.setState({ selectedOption });
    // 3 this.setState({ value: selectedOption});
    // 4 selectedUsage.push(selectedOption);
    // 5 console.log("selectedUsageArray: " + selectedUsage)
    // 6, switch to below, const oil = {usage: selectedUsage};
    const oil = {usage: selectedOption};
    this.setState({
      oil: Object.assign(this.state.oil,oil)
    });
    console.log(`Selected: ${selectedOption.toString()}`);
  }

  // from EasyMultiSelect end

  handleSelectChange(value) {
    this.getInitialState();
    console.log("You\"ve selected:", value);

/*
    const oil = {usage: value};
    // console.log("oilUsageSelected before " + oilUsageSelected);
    this.setState({
      oil: Object.assign(this.state.oil,oil)
      // oil: Object.assign(this.state.oil,oil)
    });
    console.log("this.state.oil.usage " + this.state.oil.usage)
    // console.log("oilUsageSelected after " + oilUsageSelected);

    // this.setState({ usage: value });
    // this.setState({ usage: value });
    // this.setState({ usageSelected });
    // console.log("usage: " + this.state.oil.usage)
  //  this.handleUsage(value);
  */
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
  handleUsage(value) {
        console.log("target value " + value);
        // const oilUsage = [];
        // const oilUsage = [];
        oilUsage.push(value);
        console.log("oilUsage: " + oilUsage);
        this.addUsage(value);
    }

    addUsage(value) {
      // oilUsageSelected.push(oilUsage);
      // console.log("oilUsageSelected: " + oilUsageSelected);
      const oil = {usage: value};
      // console.log("oilUsageSelected before " + oilUsageSelected);
      this.setState({
        oil: Object.assign(this.state.oil,oil)
        // oil: Object.assign(this.state.oil,oil)
      });
      console.log("oil.usage: " + this.state.oil.usage)
      // console.log("oilUsageSelected after " + oilUsageSelected);
    }
    */

  render() {
    // for EasyMultiSelect

    // console.log("selectedOption: " + this.state.oil.value) //value no longer used
    console.log("usage: " + this.state.oil.usage)
    // console.log("value: " + value.value)
    // const { selectedOption, value, stayOpen, oil, usage } = this.state; // do i need this?
    const options = [
      { value: "stress", label: "Stress" },
      { value: "focus", label: "Focus" },
      { value: "fatigue", label: "Fatigue"},
      { value: "happiness", label: "Happiness" },
    ];

    // end for EasyMultiSelect


    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
  //  const usageArray = [];

    const usageArray = [
      "happy", "sad", "regretful", "inspired", "uncomfortable", "melancholy"];
/*
    { label: "Happy", value: "happy" },
    { label: "Sad", value: "sad" },
    { label: "Regretful", value: "regretful" },
    { label: "Inspired", value: "inspired"},
    { label: "Uncomfortable", value: "uncomfortable" },
    { label: "Melancholy", value: "melancholy" },
    ];
    */

    const oilUsage = [];
    const oilUsageSelected = [];

    const genreFruitSelected = [];

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

    // const fruitDisplay =

    // BONUS - dropdowns used for viewing format and oil genres
    //       - format dropdown pulls from local variable array
    //       - grenres dropdown utilizes oilGenres.js exported array

// /* JUST NOW!!!
/*
  function handleSelectChange(value) {
    console.log("You\"ve selected:", value);
    this.setState({ usage: value });
    // this.setState({ usageSelected });
    console.log("usage: " + this.state.usageValue)
  }
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

    */
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
                console.log("e: " + e.target.value);
                const oil = {format: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} >
                {formatOptionDisplay}
              </select>
            </div>
            <div>
              Genre:
                {oilGenreDisplay}

            </div>
            <div>
              Plot Summary: <input onChange={(e) => {

                const oil = {plot: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} />
            </div>

            <div className="EasyMultiSelect">
              <Select
                name="form-field-name"
                // value={value}
                value={this.state.oil.usage.toString()}
                onChange={this.handleUsageChange}
                multi
                closeOnSelect={this.state.stayOpen}
                simpleValue
                options={options}
            />

          </div>

            <div>
              Search Genre/Fruit:
              <searchable-multi placeholder="Search fruits..." >
                <select multiple onChange={(e) => {
                  console.log("fruit e: " + e.target.value);
                  let multi = document.querySeletor("searchable-multi");

                  console.log("searchable-multi: " + multi.value);
                  genreFruitSelected.push(e.target.value.split(","));
                  console.log("genreFruitSelected: " + genreFruitSelected);
                  const oil = {genre: genreFruitSelected};
                  this.setState({
                    oil: Object.assign(this.state.oil,oil)
                  });
                  console.log("this.state.oil.genre: " + this.state.oil.genre)
                }}>
                  <option value="Apple">Apple</option>
                  <option value="Banana">Banana</option>
                  <option value="Blueberry">Blueberry</option>
                  <option value="Cherry">Cherry</option>
                  <option value="Coconut">Coconut</option>
                  <option value="Grapefruit">Grapefruit</option>
                  <option value="Kiwi">Kiwi</option>
                  <option value="Lemon">Lemon</option>
                  <option value="Lime">Lime</option>
                  <option value="Mango">Mango</option>
                  <option value="Orange">Orange</option>
                  <option value="Papaya">Papaya</option>
                </select>
              </searchable-multi>

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

/*

<select onChange={(e) => {
  const oil = {genre: e.target.value};
  this.setState({
    oil: Object.assign(this.state.oil,oil)
  });
}} >
</select>
*/

/*
handleUsage(e.target.value);
// addUsage();


  const oil = {usage: oilUsageSelected};
  console.log("oilUsageSelected before " + oilUsageSelected);
  this.setState({
    oil: Object.assign(this.state.oil,oil)
    // oil: Object.assign(this.state.oil,oil)
  });
  console.log("oil.usage: " + this.state.oil.usage)
  console.log("oilUsageSelected after " + oilUsageSelected);

}}

////////////
<div>
  Usage:

  <Select
    multi
    options={usageArray}
    simpleValue
    value={oilUsage}
    placeholder="Select how this oil makes you feel"
    onChange={this.handleSelectChange}
    />
</div>
*/

export default CreateOilListing;
