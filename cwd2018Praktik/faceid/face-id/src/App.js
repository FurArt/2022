import React, {Component} from 'react';
import './App.css';
import Navigation from './components/nav/navigation';
import Logo from './components/logo/Logo';
import ImageContainer from './components/imagecontainer/ImageContainer';
import FaceFinder from './components/FaceFinder';
import ParticlesBg from './components/particlesBackgroun/particles'
// 9a08a2fc18a340b8b5fca18e82be82d5

let myHeaders = new Headers({
  'Authorization': 'Key 9a08a2fc18a340b8b5fca18e82be82d5',
  'Content-Type' : 'application/json'
});








class App extends Component {
  
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl:'https://citaty.info/files/styles/poster/public/characters/8604.jpg?itok=_bemMaL1',
      imageData:''
    }
  }

  onIntputChange = (event) =>{
    this.setState({input :event.target.value})

   console.log(  ); 
  }

  
  onSubmit = (response) =>{
    this.setState({imageUrl: this.state.input})
    
// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id
const serchImg = JSON.stringify({
  "user_app_id": {
        "user_id": "f9g2ig4csvok",
        "app_id": "Face"
    },
  "inputs": [
    {
      "data": {
        "image": {
          "url": this.state.imageUrl
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers:myHeaders,
  body: serchImg
};

fetch("https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs", requestOptions)
.then(response => response.text())
.then(result => {
  console.log(
    JSON.parse(result, null, 2).outputs[0].data.regions[0].region_info.bounding_box
  )
})
.catch(error => console.log('error', error));
}


render(){
    return (
      <div className="App">
      <ParticlesBg />
      <Navigation />
      <Logo />
      <ImageContainer 
        onIntputChange={this.onIntputChange} 
        onSubmit={this.onSubmit}
      />  
      <FaceFinder imageUrl={this.state.imageUrl} /> 
      {/* 
      */}
      </div>
    );

  }
}

export default App;

// import React, {Component} from 'react';
// function FaceFinder() {
//   return (
//     <div className="FaceFinder">
    //  <p>Hello!</p>
//     </div>
//   );
// }

// export default FaceFinder;

