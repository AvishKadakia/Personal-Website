import React from "react";
import "./Page404.scss";

import splatterDark from "../../Images/splatterdark.png";

import Particle from "../Particle/Particle";

class Page404 extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className={"coming-soon-container " + this.props.className}>
          <div className="background">
            <Particle lineColor="#fff" lineOpacity="0.8"></Particle>

            <div className="line" id="line1"></div>
            <div className="line" id="line2"></div>
            <div className="line" id="line3"></div>
            <div className="line" id="line4"></div>
            <div className="line" id="line5"></div>
          </div>
          <div className="circle-section">
            <div className="splatter">
              <img alt="Splatter Dark" src={splatterDark}></img>
            </div>
            <div className="circle-big">
              {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
              <div className="blob-animation circle-small"></div>

              <div className="heading-container">
                <h1 className="type-wrap typed">{this.props.message}</h1>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Page404;
