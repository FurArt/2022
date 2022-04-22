import React, {Component} from 'react';
import Particles from 'react-tsparticles';

const particlesOption = {
  background:{
    color: "#555555"
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
const Options = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

const ParticlesBg = () => {
  return (
    <div className="Particles">
     <Particles options={Options} />
    </div>
  );
}

export default ParticlesBg;