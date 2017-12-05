import React from "react";

class CreateMovieListing extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {
        image: "",
        title: "",
        date: "",
        format: "",
        genre: "",
        plot: "",
        keywords: "",
      },
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Create a movie listing:</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createMovie) {
              this.props.createMovie(this.state.movie);
            }
          }}>
            <div>
            Movie Poster or Image URL (please enter a URL or leave empty, not required):
              <input onChange={(e) => {
                const movie = {image: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Movie Title: <input onChange={(e) => {
                const movie = {title: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Date watched: <input onChange={(e) => {
                const movie = {date: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Viewing Format(theater, redbox, netflix, etc.): <input onChange={(e) => {
                const movie = {format: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Genre: <input onChange={(e) => {
                const movie = {genre: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Plot Summary: <input onChange={(e) => {
                const movie = {plot: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Keywords: <input onChange={(e) => {
                const movie = {keywords: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div></div>

    );
  }
}
export default CreateMovieListing;


/*
class CreateMovieListing extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: {
        body: ""
      },
      contact: {
        name: "",
        occupation: "",
        avatar: ""
      },
      vehicle: {
        year: "",
        make: "",
        model: ""
      },
      product: {
        name: "",
        description: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Comments</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createComment) {
              this.props.createComment(this.state.comment);
            }
          }}>
            <div>
              Body: <input onChange={(e) => {
                const comment = {body: e.target.value};
                this.setState({
                  comment: Object.assign(this.state.comment,comment)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Contact</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createContact) {
              this.props.createContact(this.state.contact);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const contact = {name: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              Occupation: <input onChange={(e) => {
                const contact = {occupation: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              Avatar (please enter a URL or leave empty, not required): <input onChange={(e) => {
                const contact = {avatar: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Vehicle</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createVehicle) {
              this.props.createVehicle(this.state.vehicle);
            }
          }}>
            <div>
              Year: <input onChange={(e) => {
                const vehicle = {year: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Make: <input onChange={(e) => {
                const vehicle = {make: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Model: <input onChange={(e) => {
                const vehicle = {model: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Product</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createProduct) {
              this.props.createProduct(this.state.product);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const product = {name: e.target.value};
                this.setState({
                  product: Object.assign(this.state.product,product)
                });
              }} />
            </div>
            <div>
              Description: <input onChange={(e) => {
                const product = {description: e.target.value};
                this.setState({
                  product: Object.assign(this.state.product,product)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
      </div>

    );
  }
}
export default CreateThings;

*/
