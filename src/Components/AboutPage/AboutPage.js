import React from "react";
import "./AboutPage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Skillz from "../Skillz/Skillz";
import selfImage from "../../Images/self-image1.png";
import splatter from "../../Images/splatter.png";
import plane from "../../Images/plane.png";
import scroll from "../../Images/scroll.svg";
import wave from "../../Images/wave.png";
import wave2 from "../../Images/wave2.png";
import skillz1 from "../../Images/skillz1.png";
import skillz2 from "../../Images/skillz2.png";
import skillz3 from "../../Images/skillz3.png";
import companylogocollage from "../../Images/companylogocollage.png";
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
class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {
    AOS.init();
    $("window").scrollTop("0px");
    setBorderRadius();
    setInterval(setBorderRadius, 1500);
  }

  render() {
    return (
      <div className={"about-container  " + this.props.className}>
        <div className="background">
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
          <div className="line" id="line4"></div>
          <div className="line" id="line5"></div>
        </div>
        <div className="circle-section">
          <div className="splatter">
            <img alt="Splatter" src={splatter}></img>
          </div>
          <div className="blob-animation circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <img
              className="selfImage"
              alt="Avish Potrait"
              src={selfImage}
            ></img>
          </div>
          <div class="heading-container">
            <h1 class="type-wrap typed">Hello.</h1>
          </div>
        </div>
        <div className="plane-container">
          <img className="plane" alt="Home Page Plane" src={plane}></img>
        </div>
        <div class="about-me-container">
          <h2 data-aos="fade-in">I develop things that people use</h2>
          <p data-aos="fade-in">
            I live and breathe all things digital. Currently, I head up the
            digital design process at Jan Kelley and play a big part in
            improving all user experiences across the agency. I began my career
            in{" "}
            <a href="#">
              <span className="sky-blue">India</span>
            </a>{" "}
            working in traditional design shops before learning web development,
            and, more importantly, learning a love for a new level of creativity
            and experimentation. From that moment on I was hooked on everything
            online.
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
            label="2014-PRESENT"
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
            label="2014-PRESENT"
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
            label="2014-PRESENT"
          >
            Being creative is at the heart of everything I do. I’m obsessed with
            current trends and always strive to create “what’s next in design”
            to get brands noticed and push them forward.{" "}
          </Skillz>
        </div>
        <div className="wave-container2">
          <img className="wave" alt="Home Page Wave2" src={wave2}></img>
        </div>
        <div className="experience-container">
          <h3>I've had the pleasure of working with:</h3>
          <div className="experience-logo-container">
            <img src={companylogocollage} alt="Companies Logo collage" />
          </div>
        </div>
        <a className="link" href="/formdesk">
          <div className="work-container">
            <a className="link" href="/formdesk">
              <h3>Check out my work</h3>
            </a>
          </div>
        </a>
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
)(withRouter(AboutPage));
