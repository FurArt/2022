import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/nav/navigation";
import Logo from "./components/logo/Logo";
import ImageContainer from "./components/imagecontainer/ImageContainer";
import FaceFinder from "./components/FaceFinder";
import ParticlesBg from "./components/particlesBackgroun/particles";
import SignIn from "./components/signin/SignIn.js";
import Register from "./components/Register/Register.js";

// 9a08a2fc18a340b8b5fca18e82be82d5 Api for

let myHeaders = new Headers({
  Authorization: "Key 9a08a2fc18a340b8b5fca18e82be82d5",
  "Content-Type": "application/json",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      imageData: "",
      box: "",
      route: "signin",
    };
  }
// for check work with server
// componentDidMount(){
//   fetch('http://localhost:3000/')
//   .then(response => response.json())
//   .then(console.log)
//   .catch(console.log)
// }
// its need for creat point in face
  calculateFaceDetect = (data) => {
    let calculatedata = JSON.parse(data, null, 2).outputs[0].data.regions[0]
      .region_info.bounding_box;

    return {
      topPosition: Math.round(calculatedata.top_row * 100) + "%",
      rightPosition: Math.round((1 - calculatedata.right_col) * 100) + "%",
      bottomPosition: Math.round((1 - calculatedata.bottom_row) * 100) + "%",
      leftPosition: Math.round(calculatedata.left_col * 100) + "%",
    };
  };

  displayFacebox = (boxdata) => {
    this.setState({ box: Object.values(boxdata).join(" ") });
  };
  // it read what spell into input at home
  onIntputChange = (event) => {
    this.setState({
      imageUrl: event.target.value,
      box: "",
    });
  };

  onSubmit = (response) => {
    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    //clarifai settings
    const serchImg = JSON.stringify({
      user_app_id: {
        user_id: "f9g2ig4csvok",
        app_id: "Face",
      },
      inputs: [
        {
          data: {
            image: {
              url: this.state.imageUrl,
            },
          },
        },
      ],
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: serchImg,
    };
    //clarifai settings end

    fetch(
      "https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => this.displayFacebox(this.calculateFaceDetect(result)))
      .catch((error) => console.log("error", error));
  };

  onRoutechange = (route) => {
    this.setState({ route: route });
  };
  // rout state - signin && register && home

  render() {
    let { route, imageUrl, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg />
        <Navigation onRoutechange={this.onRoutechange} route={route} />
        {route === "home" ? (
          <div>
            <Logo />
            <ImageContainer
              onIntputChange={this.onIntputChange}
              onSubmit={this.onSubmit}
            />
            <FaceFinder box={box} imageUrl={imageUrl} />
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn onRoutechange={this.onRoutechange} />
        ) : (
          <Register onRoutechange={this.onRoutechange} />
        )}
      </div>
    );
  }
}

export default App;
