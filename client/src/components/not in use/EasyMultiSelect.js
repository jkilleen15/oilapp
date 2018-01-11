import React from "react";
import Select from "react-select";

// <Creatable />
class EasyMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      stayOpen: false,
      value: [],
      oil: {
        usage: [],
      }
    };
  }

  /*
  handleUsageChange = (selectedOption) => {
    // const selectedUsage = [];
    this.setState({ selectedOption });
    this.setState({ value: selectedOption});
    // selectedUsage.push(selectedOption);
    const oil = {usage: selectedOptions};
    this.setState({
      oil: Object.assign(this.state.oil,oil)
    });
    console.log(`Selected: ${selectedOption}`);
  }
  */

  handleUsageChange = (selectedOption) => {
    const selectedUsage = [];
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
  render() {
    console.log("selectedOption: " + this.state.value)
    console.log("usage: " + this.state.oil.usage)
    // console.log("value: " + value.value)
    const { selectedOption, value, stayOpen, oil, usage } = this.state;
    const options = [
      { value: "stress", label: "Stress" },
      { value: "focus", label: "Focus", clearableValue: false },
      { value: "fatigue", label: "Fatigue",},
      { value: "happiness", label: "Happiness", clearableValue: false },
    ];
    return (
      <div>
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleUsageChange}
        multi
        closeOnSelect={stayOpen}
        simpleValue
        options={options}
      />

    </div>
    );
  }
}

// to insert into CreateOilListing
/*
<div>
  <EasyMultiSelect />
</div>
*/

export default EasyMultiSelect;

/*
import React from 'react';
import Select from 'react-select';

class App extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}

*/
