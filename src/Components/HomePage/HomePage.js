import React from "react";
import "./HomePage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Skillz from "../Skillz/Skillz";
import indiaMap from "../../Images/india-map.png";
import bubble1 from "../../Images/bubble1.png";
import bubble2 from "../../Images/bubble2.png";
import bubble3 from "../../Images/bubble3.png";
import bubble4 from "../../Images/bubble4.png";
import bubble5 from "../../Images/bubble5.png";
import plane from "../../Images/plane.png";
import scroll from "../../Images/scroll.svg";
import wave from "../../Images/wave.png";
import wave2 from "../../Images/wave2.png";
import skillz1 from "../../Images/skillz1.png";
import skillz2 from "../../Images/skillz2.png";
import skillz3 from "../../Images/skillz3.png";
import PageTransition from "../PageTransition/PageTransition";
import $ from "jquery";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

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
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {
    AOS.init();
    $("window").scrollTop("0px");
    setBorderRadius();
    setInterval(setBorderRadius, 1500);
    var typed = new Typed("#typed", {
      strings: [
        "Programmer",
        "UI / UX Developer",
        "Philosopher",
        "Entrepreneur",
      ],
      typeSpeed: 100,
      startDelay: 0,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      cursorChar: "|",
      contentType: "html",
    });
  }

  render() {
    return (
      <div className={"section-container  " + this.props.className}>
        <div className="background">
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
          <div className="line" id="line4"></div>
          <div className="line" id="line5"></div>
        </div>
        <div className="circle-section">
          <div className="blob-animation circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <div className="blob-animation circle-small"></div>
            <img className="map" alt="India Map" src={indiaMap}></img>
            <div className="scroll-arrow bounce">
              <img src={scroll} alt="Scroll Arrow"></img>
            </div>
          </div>
          <div class="heading-container">
            <h1 class="type-wrap">
              {/* <!-- add static words/sentences here (i.e. text that you don't want to be removed)--> */}
              <span id="typed" class="typed"></span>
            </h1>
          </div>
        </div>
        <img className="bubble1" alt="Bubble Effect 1" src={bubble1}></img>

        <img className="bubble2" alt="Bubble Effect 2" src={bubble2}></img>
        <div className="plane-container">
          <img className="plane" alt="Home Page Plane" src={plane}></img>
        </div>
        <div class="about-me-container">
          <h2 data-aos="fade-in">Hello, I'm Avish</h2>
          <p data-aos="fade-in">
            I'm a digital designer that made the trip across the pond from
            Glasgow, Scotland to{" "}
            <a href="#">
              <span className="sky-blue">#HamOnt</span>
            </a>
            , Canada, in 2010. Now I work @ Jan Kelley in Burlington as UX Lead
            and Senior Art Director.
          </p>
        </div>
        <div className="wave-container">
          <img className="wave" alt="Home Page Wave" src={wave}></img>
        </div>
        <div className="skillz-main-container">
          <Skillz
            src={skillz1}
            alt="Microphone"
            title="Strong Direction"
            className="left"
          >
            My day-to-day involves giving direction on UX strategy, architecture
            and design as well as being hands on when it comes to visually
            positioning brands like Topper’s Pizza and Mr. Lube.
          </Skillz>
          <Skillz
            src={skillz2}
            alt="Book"
            title="Deep Strategy"
            className="right"
          >
            I bring strategic thought to the forefront with every project. I
            always take the time to do the research and use it to create great
            experiences that deliver on user needs and business objectives.
          </Skillz>
          <Skillz
            src={skillz3}
            alt="Bucket"
            title="Rockin Design"
            className="left"
          >
            Being creative is at the heart of everything I do. I’m obsessed with
            current trends and always strive to create “what’s next in design”
            to get brands noticed and push them forward.{" "}
          </Skillz>
        </div>
        <div className="wave-container2">
          <img className="wave" alt="Home Page Wave2" src={wave2}></img>
        </div>

        <div className="circle-section circle-2">
          <div className="blob-animation circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <div className="blob-animation circle-small"></div>
            <img className="map" alt="India Map" src={indiaMap}></img>
          </div>

          <div class="heading-container">
            <h1 class="type-wrap" data-aos="fade-in">
              I've landed, let's &nbsp;
              <a className="link" href="/contact">
                <span className="sky-blue" data-aos="fade-in">
                  talk
                </span>
              </a>
            </h1>
          </div>
        </div>
        <div className="bubble4">
          <img alt="Bubble Effect 4" src={bubble4}></img>
        </div>
        <div className="bubble5">
          <img alt="Bubble Effect 5" src={bubble5}></img>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // form: { ...state.form },
    // sessionInfo: { ...state.sessionInfo },
    // organisation: { ...state.organisation },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // UpdateData: (input) =>
    //   dispatch({
    //     type: "UpdateData",
    //     value: input,
    //   }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomePage));
