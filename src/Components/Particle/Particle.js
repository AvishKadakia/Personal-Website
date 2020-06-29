import React from "react";
import "./Particle.scss";
import Particles from "react-particles-js";

class Particle extends React.Component {
  componentDidMount() {}
  render() {
    let lineColor = this.props.lineColor;

    let noOfParticles = 15;
    let lineOpacity = this.props.lineOpacity ? this.props.lineOpacity : 0.2;
    if (window.innerWidth < 800) {
      noOfParticles = 22;
    }
    return (
      <React.Fragment>
        <Particles
          className={"particle-container  " + this.props.className}
          params={{
            particles: {
              number: {
                value: noOfParticles,
                density: {
                  enable: true,
                  value_area: 315.65905665290904,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 20,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.2244776885211732,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 0,
                random: true,
                anim: {
                  enable: false,
                  speed: 400,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: lineColor,
                opacity: lineOpacity,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        ></Particles>
      </React.Fragment>
    );
  }
}

export default Particle;
