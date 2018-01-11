import React, {Component} from "react";
import {Link} from "react-router-dom";
import multiSelect from "../components/MultiSelect"
import oilGenres from "../oilGenres";
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
        usage: "",
        keywords: "",
        oilGenres,
      },
    };
  }

  render() {
    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
    const usageArray = ["happy", "sad", "regretful", "inspired", "uncomfortable"];
    const oilUsage = [];
    const oilUsageSelected = [];

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

    const oilGenreDisplay = oilGenres.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));

    // "happy", "sad", "regretful", "inspired", "uncomfortable"
    const usageDisplay = usageArray.map((em,i) => (
      <option value={em} key={i}>{em}</option>
    ));

    const usageDisplay2 = usageArray.map((em2,i) => (
      <option key={i} type="checkbox" className="checkbox-control"
             name="removeSelected" checked={this.state.removeSelected}
             onChange={this.handleUsage} value={em2}> {em2} </option>
    ));

    // <input type="checkbox" className="checkbox-control" name="removeSelected" checked={this.state.removeSelected} onChange={this.handleUsage} />
    // <span className="checkbox-label">Remove selected options</span>

    function handleUsage(e) {
        console.log("target value " + e);
        // const oilUsage = [];
        // const oilUsage = [];
        oilUsage.push(e);
        console.log("oilUsage: " + oilUsage);
        oilUsageSelected.push(oilUsage);
        console.log("oilUsageSelected: " + oilUsageSelected);
    }

    // BONUS - dropdowns used for viewing format and oil genres
    //       - format dropdown pulls from local variable array
    //       - grenres dropdown utilizes oilGenres.js exported array

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
                value={["happy", "sad", "regretful", "inspired", "uncomfortable"]}

                /*
                {usageDisplay}
              </select>
                </div>
                */

                // onChange={(e) => {
                onChange={(e) => {
                //  const oil = {usage: e.target.value};
                // const oil = {usage: []};
                // const oilUsageSelected = [];
                  // const oilUsage = [];
                  // oilUsageSelected.push(e.target.value);
                //  console.log("oilUsage: " + oilUsageSelected);
                  // const oil = {usage: oilUsage};
                  // console.log("oilUsage: " + oilUsage);
                  // console.log("oil: " + oil);
                  handleUsage(e.target.value);
                  const oil = {usage: oilUsageSelected};
                  console.log("oilUsageSelected before " + oilUsageSelected);
                  this.setState({
                    oil: Object.assign(this.state.oil,oil)
                    // oil: Object.assign(this.state.oil,oil)
                  });
                  console.log("oil.usage: " + this.state.oil.usage)
                  console.log("oilUsageSelected after " + oilUsageSelected);
                }} >
                {usageDisplay2}
              </select>
                </div>


                <div className="section">



				<div className="checkbox-list">
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="removeSelected" checked={this.state.removeSelected} onChange={this.handleUsage} />
						<span className="checkbox-label">Remove selected options</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.handleUsage} />
						<span className="checkbox-label">Disable the control</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="crazy" checked={crazy} onChange={this.handleUsage} />
						<span className="checkbox-label">I don't like Chocolate (disabled the option)</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="stayOpen" checked={stayOpen} onChange={this.handleUsage} />
						<span className="checkbox-label">Stay open when an Option is selected</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="rtl" checked={this.state.rtl} onChange={this.handleUsage} />
						<span className="checkbox-label">rtl</span>
					</label>
				</div>
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
