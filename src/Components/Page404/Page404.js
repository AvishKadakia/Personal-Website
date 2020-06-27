import React from "react";
import "./Page404.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import contactplane from "../../Images/contactplane.png";
import scroll2 from "../../Images/scroll2.svg";
import splatterDark from "../../Images/splatterdark.png";
import $ from "jquery";
import Typed from "typed.js";
import AOS from "aos";
function setBorderRadius() {
  var slides = document.getElementsByClassName("blob-animation");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.setProperty("--br-blobby", generateBorderRadiusValue());
  }
}

function generateBorderRadiusValue() {
  return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
}

function getRandomValue() {
  return Math.floor(Math.random() * 50) + 50;
}
class Page404 extends React.Component {
  componentDidMount() {
    AOS.init();
    $("window").scrollTop("0px");
    setBorderRadius();
    setInterval(setBorderRadius, 1500);
  }
  render() {
    console.log("loadingNewPage " + localStorage.getItem("loadingNewPage"));

    return (
      <React.Fragment>
        <div className={"coming-soon-container " + this.props.className}>
          <div className="background">
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
                <h1 className="type-wrap typed">Coming Soon.</h1>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Page404;
