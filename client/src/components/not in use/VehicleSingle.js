import React, {Component} from "react";

class VehicleSingle extends Component {

  componentDidMount() {
    const thisVehicleId = this.props.match.params.id;
    this.props.getVehicle(thisVehicleId);
  }

  render(){
    return (
      <div>
        <h3>Make: {this.props.vehicle.make || "n/a"}</h3>
        <h3>Model: {this.props.vehicle.model || "n/a"}</h3>
        <h3>Year: {this.props.vehicle.year || "n/a"}</h3>
        <h3>Miles: {this.props.vehicle.miles || "n/a"}</h3>
        <h3>Fuel Type: {this.props.vehicle.fuel || "n/a"}</h3>
        <h3>Price: {this.props.vehicle.price || "n/a"}</h3>
        <h3>Location: {this.props.vehicle.city || "n/a"}</h3>
      </div>
    )
  }
}

export default VehicleSingle;
