import React, {Component} from "react";
import {Link} from "react-router-dom";

class OilSingle extends Component {

  componentDidMount() {
    const thisOilId = this.props.match.params.id;
    this.props.getOil(thisOilId);
  }

  render(){
    const oilPlaceholderImg = "http://studiobotanica.com/wp-content/uploads/2012/12/EssOilHerbs.jpg";
    console.log(this.props.oil);
    console.log("this.props.oil.links props: " + this.props.oil.links);


    let linksDisplay = "";
    if (this.props.oil.links) {

      if (this.props.oil.links === [] || this.props.oil.links === "" || this.props.oil.links.length === 0) {
      console.log("no links: " + this.props.oil.links);

    } else {
      console.log("we got links!");
      const linksToDisplay = this.props.oil.links;
      console.log(linksToDisplay[0].toString().split(","));
      const linksToDisplay2 = linksToDisplay[0].toString().split(",");
      // console.log("formatOptions2" + linksToDisplay2);
      linksDisplay =
        linksToDisplay2.map((link,i) => (
        <h4 key={i}><li><a href={link} target="_blank">{link}</a></li></h4>

    ));

    }

  }

    return (
      <div>
        <button><h3><Link className="linkNoDecoration" to={"/update/" + this.props.oil._id}> Edit or Update this Listing </Link></h3></button>
        <h3>Oil Id: {this.props.oil._id}</h3>
        <img className="imageFormat" src={this.props.oil.image || oilPlaceholderImg}
          alt={"Image Info: " + this.props.oil.title + " image will not load. Check your url."} />

        <h3>Oil Name: {this.props.oil.title}</h3>
        <h3>Oil Type: {this.props.oil.oilType}</h3>
        <h3>Warnings: {this.props.oil.warnings}</h3>
        <h3>Uses: {this.props.oil.usage}</h3>
        <h3>Application: {this.props.oil.application}</h3>
        <h3>Body Systems Affected: {this.props.oil.bodySystems}</h3>
        <h3>Properties: {this.props.oil.properties}</h3>
        <h3>Keywords: {this.props.oil.keywords || ""}</h3>
        <h3>Links:</h3>
        {linksDisplay}

        <button><h3><Link className="linkNoDecoration" to={"/update/" + this.props.oil._id}>
          Edit or Update this Listing </Link></h3></button>
        <h3><Link to={"/"}> Return to Full Oil List </Link></h3>
      </div>
    );
  }

}

export default OilSingle;
