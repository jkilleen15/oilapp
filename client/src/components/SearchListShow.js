import React from "react";
import {Link} from "react-router-dom";
// import Select from "react-select";
// import { Button } from "react-bootstrap";
// import Oil from './Oil';
// <li key={i}><a>{oil.title} {oil._id}</a></li>

class SearchListShow extends React.Component {
  constructor(props) {
    super(props);
    /*
     * The data (oils) comes from the higher level component as props. We are
     * going to use state to manage filtering of oils.
     */
    this.state = {
      searchableListVisible: true,

      filteredOils: [],
      filtering: false,
      keyword: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.filtering) {
      /*
       * If the oils got deleted or watched/unwatched we have to reflect it
       * in the filteredOils array.
       */
      this.setState({ filteredOils: this.filterOils(nextProps.oils) });
    }
  }

  filterOils(oils) {
    return oils.filter((oil) => {
      // search by keyword
      // return oil.usage.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1;
      // return (
      return oil.title.toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      oil.oilType.toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      oil.usage.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      oil.keywords.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      oil.application.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      oil.properties.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1 ||
      oil.bodySystems.toString().toLowerCase().search(this.state.keyword.toLowerCase()) !== -1;
      // return;
      // );
    });
  }

  filterList(event) {
    let keyword = event.target.value;
    if (!keyword) {
      this.setState({ filtering: false });
      return;
    }
    this.setState({
      filteredOils: this.filterOils(this.props.oils),
      filtering: true,
      // keyword: keyword
      keyword
    });
  }

  // {oilList.length ? oilList : 'Nothing found.'}

  render() {
    let oilList = [];
    let oils = this.state.filtering ? this.state.filteredOils : this.props.oils;

    if (oils.length) {
      oils.map((oil) => {
        // oilList.push(<Oil key={oil._id} oil={oil} />);
        // oilList.push(oil.title, oil._id);
        oilList.push(oil);
      });
    }

/* removed for button
    const oilListShow = oilList.map((oil,i) => (
      <li><Link to={"/oil/" + oil._id}> {oil.title} </Link></li>
    ));
*/

/*
    if (!this.props.oils.length) {
      return (
        <div className="column">
          <h4>{this.props.title}</h4>
          Loading searchable list...
        </div>
      );
    }
*/

    ////
    let searchShowButtonText = "";
    let showFullYesNoLabel = "";
    let quickLinksLabel = "";
    let resultsListLabel = "";
    let inputBox = "";
    let resultStatus = "";
    let oilListShow = "";
    let oilListShowLong = "";
    if (this.state.searchableListVisible) {
      searchShowButtonText = "Hide Searchable List";

      showFullYesNoLabel = "Search My Oils";
      // <div><h2>Search My Oils</h2></div>;

      quickLinksLabel =
      <div><h3>Quick Link Results: </h3></div>;

      resultsListLabel =
      <div><h3>Search Results: </h3></div>;

      resultStatus =
        <i>
          {this.state.filtering ?
            this.state.filteredOils.length +
            " out of " + this.props.oils.length + " oils match your search" :
            this.props.oils.length + " oils in my collection"}</i>;

      inputBox =
        <input
        className="prompt"
        placeholder="Search oils by keyword (oil name, usage, keywords, application, body systems)"
        onChange={this.filterList.bind(this)}
        // onChange={this.filterList}
        // value={this.state.keyword}
      />;

      // oilDivs = this.props.data.map((d,i) => {
         // oilDivs = this.props.oils.map((d,i) => {
         //<li className="listNoDecoration" key={oil._id}><Link to={"/oil/" + oil._id}> {oil.title} </Link></li>

         oilListShow =
         oilList.map((oil,i) => (
           <li key={i}><Link to={"/oil/" + oil._id}> {oil.title} </Link></li>
         ));

         oilListShowLong = oilList.map((oil,i) => (
         // oilDivs = this.props.oils.map((d,i) => {
         // removed bc seems extraneous for initial listing --> <li><i>Oil Type: {oil.oilType}</i></li>

          <div key={i}>
          <div>
            <h3>{oil.title}</h3>
            <ul>
            <li>Uses: {oil.usage}</li>
            <li>Application: {oil.application}</li>
            <li>Properties: {oil.properties}</li>
            <li><Link to={"/oil/" + oil._id}> view and update oil details </Link></li>
          </ul>
        </div>
              <button onClick={this.handleDeleteClick} id={oil._id}>
                DELETE THIS OIL - {oil.title.toUpperCase()}
              </button>
          </div>
         ));
         // });
    } else {
      searchShowButtonText = "Search My Collection";
      showFullYesNoLabel = "";
      quickLinksLabel = "";
      resultsListLabel = "";
    }

    return (
    //  //

    // return (
        <div className="column">
          <div>
            <button onClick={() => {
              this.setState({
                searchableListVisible: !this.state.searchableListVisible
              });
            }
          }>
              <h3>{searchShowButtonText}</h3>
            </button>

          </div>

          <div><h2>{showFullYesNoLabel}</h2></div>
          <div><h3>{inputBox}</h3></div>
          {resultStatus}
          {quickLinksLabel}

        <div className="ui bottom attached segment">
          <div className="ui divided items">
            <ul className="listNoDecoration">
            {oilList.length ? oilListShow : "No matches found."}
          </ul>
          </div>

          {resultsListLabel}
          <div className="ui divided items">
            {oilList.length ? oilListShowLong : "No matches found."}
          </div>
        </div>
        </div>
     );
  }
}

/*
Oil.propTypes = {
  oils: React.PropTypes.array,
  title: React.PropTypes.string
};
*/

export default SearchListShow;
// module.exports = searchListShow;
