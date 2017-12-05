import React, {Component} from "react";

class ContactSingle extends Component {

  componentDidMount() {
    const thisContactId = this.props.match.params.id;
    this.props.getContact(thisContactId);
  }

  render() {
    const PersonImg = "https://lh3.googleusercontent.com/B4Rmc8NPG7fHIGmN65214ppzNGHNa_wuLSSJ6Dz85KJoZ0zlBFnpH16pOJBHpwA0fCs=w300";
    return (
      <div>
        <img src={this.props.contact.avatar || PersonImg} alt={this.props.contact.name} />
        <h3>Name: {this.props.contact.name || "n/a"}</h3>
        <h3>Occupation: {this.props.contact.occupation || "n/a"}</h3>
      </div>
    );
  }
}

export default ContactSingle;
