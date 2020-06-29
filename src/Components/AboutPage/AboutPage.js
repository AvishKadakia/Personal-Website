import React from "react";
import "./AboutPage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Skillz from "../Skillz/Skillz";
import selfImage from "../../Images/self-image1.png";
import splatter from "../../Images/splatter.png";
import plane from "../../Images/plane.png";
import wave from "../../Images/wave.png";
import wave2 from "../../Images/wave2.png";
import diploma from "../../Images/diploma.png";
import skillz1 from "../../Images/skillz2.png";
import graduation from "../../Images/graduation.png";
import companylogocollage from "../../Images/companylogocollage.png";
import Particle from "../Particle/Particle";

import $ from "jquery";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {
    $("window").scrollTop("0px");
  }

  render() {
    return (
      <div className={"about-container  " + this.props.className}>
        <div className="background">
          <Particle lineColor="#00e5ea"></Particle>

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
            <h1 class="type-wrap typed">Hello,</h1>
          </div>
        </div>
        <div className="plane-container">
          <img className="plane" alt="Home Page Plane" src={plane}></img>
        </div>
        <div class="about-me-container">
          <h2 data-aos="fade-in">I develop things that people use</h2>
          <p data-aos="fade-in">
            I live and breathe all things digital. Currently, I head up the
            development process at{" "}
            <a href="https://proferotechno.com/">
              <span className="sky-blue">&nbsp;Profero Techno</span>
            </a>{" "}
            and play a big part in improving all user experiences across the
            agency. I have been developing software products since past 7 years.
            I began my career working as a junior software developer for{" "}
            <a href="https://maqsoftware.com/">
              <span className="sky-blue">MAQ </span>
            </a>{" "}
            &nbsp;before switching to work for a startup&nbsp;
            <a href="https://devomark.com/">
              <span className="sky-blue">Devomark</span>
            </a>{" "}
            &nbsp;, and more importantly, learning a love for a new level of
            creativity and experimentation. Since than I have been hooked on
            everything technical
          </p>
        </div>
        <div className="wave-container">
          <img className="wave" alt="Home Page Wave" src={wave}></img>
        </div>
        <div className="skillz-main-container">
          <Skillz
            src={skillz1}
            alt="Book"
            title="Education"
            className="left"
            label="June 2002 - March 2018"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. I
          </Skillz>
          <Skillz
            src={diploma}
            alt="Diploma"
            title="First Job"
            className="right image-fix-1"
            label="2012-2015"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. I
          </Skillz>
          <Skillz
            src={graduation}
            alt="Bucket"
            title="First Startup"
            className="left image-fix-2"
            label="2015-2018"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. I.{" "}
          </Skillz>
        </div>
        <div className="wave-container2">
          <img className="wave" alt="Home Page Wave2" src={wave2}></img>
        </div>
        <div className="experience-container">
          <h3>I've had the pleasure of working at:</h3>
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
