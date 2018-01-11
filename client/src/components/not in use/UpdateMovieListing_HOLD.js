import React, {Component} from "react";
import {Link} from "react-router-dom";
import oilGenres from "../oilGenres";
import Select from "react-select";
import "react-select/dist/react-select.css";

class UpdateOilListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oil: {
        id: this.props.oil._id,
        image: this.props.oil.image,
        title: this.props.oil.title,
        date: this.props.oil.date,
        format: this.props.oil.format,
        genre: this.props.oil.genre,
        plot: this.props.oil.plot,
        usage: this.props.oil.usage,
        keywords: this.props.oil.keywords,
        oilGenres,
        selectedOption: this.props.oil.selectedOption,
        value: this.props.oil.usage,
      },
      // for EasyMultiSelect
      // selectedOption: this.props.selectedOption,
      stayOpen: false,
      // value: this.props.oil.usage,
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
  //  const thisOilId = this.props.match.params.id;
  //  this.props.getOil(thisOilId);
  // }

  // from EasyMultiSelect

  // simplified function
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

  /* OLD FUNCTION
    handleUsageChange = (selectedOption) => {
      const selectedUsage = [];
      console.log("selectedOption.value: " + selectedOption.value);
      this.setState({ selectedOption });
      this.setState({ value: selectedOption});
      selectedUsage.push(selectedOption);
      console.log("selectedUsageArray: " + selectedUsage)
      const oil = {usage: selectedUsage};
      this.setState({
      oil: Object.assign(this.state.oil,oil)
      });
      console.log(`Selected: ${selectedOption}`);
    }
    */

    // from EasyMultiSelect end

  render() {

    // for EasyMultiSelect
    console.log("this.state.oil.usage" + this.state.oil.usage);
    console.log("value: " + this.state.oil.value)
    console.log("selectedOption: " + this.state.oil.selectedOption)
    console.log("usage: " + this.state.oil.usage)
    // console.log("value: " + value.value)
    const { selectedOption, value, stayOpen, oil, usage } = this.state;
    const options = [
      { value: "stress", label: "Stress" },
      { value: "focus", label: "Focus" },
      { value: "fatigue", label: "Fatigue"},
      { value: "happiness", label: "Happiness" },
    ];

    // end for EasyMultiSelect

    console.log(this.props.oil);
    console.log(this.props.oil.title);
    console.log("state image" + this.state.oil.image);
    console.log("selectedOption: " + this.state.selectedOption);
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

    return (
      <div>
        <div>
          <h1>Update this oil listing:</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.updateOil) {
              this.props.updateOil(this.state.oil);
            }
          }}>
            <div>
            Oil Poster or Image URL (please enter a URL or leave empty, not required):
          <input value={this.state.oil.image}
            onChange={(e) => {
            const oil = {image: e.target.value || ""};
            this.setState({
              oil: Object.assign(this.state.oil,oil)
            });
          }} />
            </div>
            <div>
              Oil Title: <input value={this.state.oil.title}
                onChange={(e) => {
                const oil = {title: e.target.value};
                this.setState({
                  oil: Object.assign(this.state.oil,oil)
                });
              }} />
            </div>
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
                value={value}
                // value={value}
                onChange={this.handleUsageChange}
                multi
                closeOnSelect={stayOpen}
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
            <button>Update This Listing! </button>
          </form>
        </div>
        <li><Link to={"/"}> return to oil list </Link></li>
      </div>

    );
  }
}
export default UpdateOilListing;
