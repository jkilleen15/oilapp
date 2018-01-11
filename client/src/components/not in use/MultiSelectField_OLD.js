import React, {Component} from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

const FLAVOURS = [
  { label: "Chocolate", value: "chocolate" },
	{ label: "Vanilla", value: "vanilla" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Caramel", value: "caramel" },
	{ label: "Cookies and Cream", value: "cookiescream" },
	{ label: "Peppermint", value: "peppermint" },
];

const usageArray2 = [
  // "happy", "sad", "regretful", "inspired", "uncomfortable", "melancholy"
{ label: "Happy", value: "happy" },
{ label: "Sad", value: "sad" },
{ label: "Regretful", value: "regretful" },
{ label: "Inspired", value: "inspired"},
{ label: "Uncomfortable", value: "uncomfortable" },
{ label: "Melancholy", value: "melancholy" },
];

const WHY_WOULD_YOU = [
	{ label: "Chocolate (are you crazy?)", value: "chocolate", disabled: true },
].concat(FLAVOURS.slice(1));

var MultiSelectField = createClass({
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
			usageValue: [],
      // usageSelected:[],
			rtl: false,
		};
	},
	handleSelectChange (value) {
		console.log("You\"ve selected:", value);
		this.setState({ usageValue: value });
    // this.setState({ usageSelected });
    console.log("usageValue: " + this.state.usageValue)
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

  /*
  */

	render () {
		const { crazy, disabled, stayOpen, usageValue } = this.state;
		const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label} <a href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/Multiselect.js">(Source)</a></h3>
				<Select
					closeOnSelect={!stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleSelectChange}
					options={FLAVOURS}
					placeholder="Select your favourite(s) flavours!"
          removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={usageValue}
          // usageSelected={usageSelected}
				/>

				<div className="checkbox-list">
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="removeSelected" checked={this.state.removeSelected} onChange={this.toggleCheckbox} />
						<span className="checkbox-label">Remove selected options</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox} />
						<span className="checkbox-label">Disable the control</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="crazy" checked={crazy} onChange={this.toggleCheckbox} />
						<span className="checkbox-label">I don"t like Chocolate (disabled the option)</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="stayOpen" checked={stayOpen} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Stay open when an Option is selected</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="rtl" checked={this.state.rtl} onChange={this.toggleCheckbox} />
						<span className="checkbox-label">rtl</span>
					</label>
				</div>
			</div>
		);
	}
});

module.exports = MultiSelectField;
