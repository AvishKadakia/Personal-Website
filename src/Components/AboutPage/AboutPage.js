import React from "react";
import "./AboutPage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Skillz from "../Skillz/Skillz";
import Footer from "../Footer/Footer";
import Particle from "../Particle/Particle";
import WorkContainer from "../WorkContainer/WorkContainer";
import { LazyLoadImage } from "react-lazy-load-image-component";

let selfImage =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/self-image1.png";
let splatter =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/splatter.png";
let plane =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/plane.png";
let wave =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/wave.png";
let wave2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/wave2.png";
let diploma =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/diploma.png";
let skillz1 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/skillz2.png";
let microphone =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/skillz1.png";
let graduation =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/graduation.png";
let companylogocollage =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/companylogocollage1.png";
class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {}

  render() {
    return (
      <div className={"about-container  " + this.props.className}>
        <div className="background">
          {window.innerWidth > 800 ? (
            <Particle lineColor="#00e5ea"></Particle>
          ) : null}
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
          <div className="line" id="line4"></div>
          <div className="line" id="line5"></div>
        </div>
        <div className="circle-section">
          <div className="splatter">
            <LazyLoadImage alt="Splatter" src={splatter} />
          </div>
          <div className="blob-animation circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <LazyLoadImage
              className="selfImage"
              alt="Avish Potrait"
              src={selfImage}
            />
          </div>
          <div className="heading-container">
            <h1 className="type-wrap typed">Hello,</h1>
          </div>
        </div>
        <div className="plane-container">
          <LazyLoadImage className="plane" alt="Home Page Plane" src={plane} />
        </div>
        <div className="about-me-container">
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
              <span className="sky-blue">MAQ Software </span>
            </a>{" "}
            &nbsp;before switching to work for a startup&nbsp;
            <a href="https://devomark.com/">
              <span className="sky-blue">Devomark</span>
            </a>{" "}
            &nbsp;, and more importantly, learning a love for a new level of
            creativity and experimentation.
          </p>
        </div>
        <div className="wave-container">
          <LazyLoadImage className="wave" alt="Home Page Wave" src={wave} />
        </div>
        <div className="skillz-main-container">
          <Skillz
            src={skillz1}
            alt="Book"
            title="Education"
            className="left"
            label="June 2002 - March 2018"
          >
            Technology has been a subject of interest for me since my childhood
            (Must have been all those video games). So at a very early age I had
            decided that I wanted to pursure a career developing these
            technologies . As a result I went on to get a Diploma &amp;
            Bachelor's Degree in Computer Engineering. After completing my
            Bachelor's Degree I decided to get some practical experience and
            decided to get a job.
          </Skillz>
          <Skillz
            src={diploma}
            alt="Diploma"
            title="Maq Software"
            className="right image-fix-1"
            label="August 2018 - Februrary 2019"
          >
            After completing my Bachelor's degree I joined Maq Software as a
            Junior S\W Developer. At MAQ software I had a chance to work under
            great mentors and gained a lot of industry knowledge. The learning
            curve was very steep being a fresher but given software development
            is one of my biggest passions, I was quickly able to overcome the
            challenges and became an integral part of the project teams. My
            project managers on multiple occasions had commended me for the
            same.
          </Skillz>
          <Skillz
            src={graduation}
            alt="Bucket"
            title="Devomark Digital Agency"
            className="left image-fix-2"
            label="March 2018 - October 2019"
          >
            After I left MAQ software I had an oppurtunity to work as a project
            manager for Devomark. Given my previous experience as a software
            engineer it was quite challenging to lead entire project teams, plan
            project architecture, achieve milestone and deliver on time as well.
            But with perseverance and hard work I was able to rise up to the
            challenge and was often praised by the organization’s upper
            management for the same.
          </Skillz>
          <Skillz
            src={microphone}
            alt="Microphone"
            title="Profero Techno"
            className="right "
            label="November 2019 - Present"
          >
            Working at Profero Techno has greatly improved my communication
            skills as a project manager due to constant interaction with
            clients. This has helped me understand and bridge the gap between
            the client's expectations and the technological barrier in
            implementing them greatly. Being a project manager at a company with
            such a large product suite is very challenging at times and has
            greatly pushed my mental as well and physical capabilities. But it
            has been a great learning experience so far.
          </Skillz>
        </div>
        <div className="wave-container2">
          <LazyLoadImage className="wave" alt="Home Page Wave2" src={wave2} />
        </div>
        <div className="experience-container">
          <h3>I've had the pleasure of working with:</h3>
          <div className="experience-logo-container">
            <LazyLoadImage
              src={companylogocollage}
              alt="Companies Logo collage"
            />
          </div>
        </div>
        <WorkContainer
          link="/devomark"
          className="bottle"
          title="Check out my work"
        ></WorkContainer>
        <Footer />
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
