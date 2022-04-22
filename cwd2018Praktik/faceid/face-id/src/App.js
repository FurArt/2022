import React, {Component} from 'react';
import './App.css';
import Navigation from './components/nav/navigation';
import Logo from './components/logo/Logo';
import ImageContainer from './components/imagecontainer/ImageContainer';
import FaceFinder from './components/FaceFinder';
import ParticlesBg from './components/particlesBackgroun/particles'

const particlesOption = {
  background:{
    color: "#030303"
  },
  fpsLimit: 60,
  interactivity:{
    detectsOn:'canvas',
    events:{
      resize: true
    }
  },
  particles:{
    color:{
      value:'ffffff' 
    },
    number: {
      density:{
        enable:true,
        area:1000
      },
      limit: 1000,
      value: 400
    },
    opacity:{
      animation:{
        enable:true,
        minimumValue: 0.5,
        speed: 1,
        sync: false
      },
      random: {
        enable:true,
        minimumValue: 0.05,
      },
      value: 1
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: {
        enable:true,
        minimumValue: 0.05,
      },
      value: 1
    }    
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  onIntputChange = (event) =>{
    console.log(event);
  }
  render(){
    return (
      <div className="App">
      <ParticlesBg />
      <Navigation />
      <Logo />
      <ImageContainer onIntputChange={this.onIntputChange} />
      <FaceFinder /> 
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