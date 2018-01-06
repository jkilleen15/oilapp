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
      movie: {
        emotions: [],
      }
    };
  }

  /*
  handleEmotionsChange = (selectedOption) => {
    // const selectedEmotions = [];
    this.setState({ selectedOption });
    this.setState({ value: selectedOption});
    // selectedEmotions.push(selectedOption);
    const movie = {emotions: selectedOptions};
    this.setState({
      movie: Object.assign(this.state.movie,movie)
    });
    console.log(`Selected: ${selectedOption}`);
  }
  */

  handleEmotionsChange = (selectedOption) => {
    const selectedEmotions = [];
    this.setState({ selectedOption });
    this.setState({ value: selectedOption});
    selectedEmotions.push(selectedOption);
    console.log("selectedEmotionsArray: " + selectedEmotions)
    const movie = {emotions: selectedEmotions};
    this.setState({
      movie: Object.assign(this.state.movie,movie)
    });
    console.log(`Selected: ${selectedOption}`);
  }
  render() {
    console.log("selectedOption: " + this.state.value)
    console.log("emotions: " + this.state.movie.emotions)
    // console.log("value: " + value.value)
    const { selectedOption, value, stayOpen, movie, emotions } = this.state;
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
        onChange={this.handleEmotionsChange}
        multi
        closeOnSelect={stayOpen}
        simpleValue
        options={options}
      />

    </div>
    );
  }
}

// to insert into CreateMovieListing
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
