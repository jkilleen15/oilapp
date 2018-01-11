import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";

/*
class MultiSelectField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oil: {
        id: "",
        image: "",
        title: "",
        date: "",
        format: "",
        genre: "",
        plot: "",
        usage: [],
        keywords: "",
        // oilGenres,
      },
    };
*/
const usageArray = [
  // "happy", "sad", "regretful", "inspired", "uncomfortable", "melancholy"
{ label: "Happy", value: "happy" },
{ label: "Sad", value: "sad" },
{ label: "Regretful", value: "regretful" },
{ label: "Inspired", value: "inspired"},
{ label: "Uncomfortable", value: "uncomfortable" },
{ label: "Melancholy", value: "melancholy" },
    ];

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
      // usage: [],
      oil: {
        genre: (this.oil.props.genre || []),
      },
		};
	},

	handleSelectChange (value) {
		console.log("You've selected:", value);
		this.setState({ value });
    this.setState({ genre: value });
    console.log("multifield state.value" + this.state.value);
    console.log("multifield genre.value" + this.state.genre);
/*
    const oil = {usage: value};
    // console.log("oilUsageSelected before " + oilUsageSelected);
    this.setState({
      oil: Object.assign(this.state.oil,oil)
      // oil: Object.assign(this.state.oil,oil)
    });
    console.log("this.state.oil.usage " + this.state.oil.usage)
*/
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
render(){
		const { crazy, disabled, stayOpen, value, genre } = this.state;
		// const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
		return (
			<div className="section">
				<Select
					closeOnSelect={stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleSelectChange}
					options={usageArray}
					placeholder="Select your favourite(s)"
          removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={value}
          genre={this.state.genre}
        />
			</div>
		);
}
  });

// export default MultiSelectField;
module.exports = MultiSelectField;
