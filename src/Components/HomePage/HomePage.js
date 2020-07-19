import React from "react";
import "./HomePage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Skillz from "../Skillz/Skillz";
import Particle from "../Particle/Particle";
import InfoBox from "../InfoBox/InfoBox";
import Typed from "typed.js";
import $ from "jquery";
// ..
import { LazyLoadImage } from "react-lazy-load-image-component";

let indiaMap =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/india-map.png";

let bubble1 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/bubble1.png";
let bubble2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/bubble2.png";
let bubble4 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/bubble4.png";
let bubble5 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/bubble5.png";
let plane =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/plane.png";
let scroll =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/scroll.svg";
let wave =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/wave.png";
let wave2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/wave2.png";
let skillz1 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/skillz1.png";
let skillz2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/skillz2.png";
let skillz3 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/skillz3.png";
let morphLab =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/home.png";
let mobileLogin =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileLogin.png";
let mobileSplash =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileSplash.png";
let homepage =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/homepage.png";
let mobileHome =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/mobileHome.jpeg";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rerender: false };
  }
  componentDidMount() {
    new Typed("#typed", {
      strings: [
        "Programmer",
        "UI / UX Developer",
        "Philosopher",
        "Entrepreneur",
      ],
      typeSpeed: 50,
      startDelay: 0,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
      cursorChar: "|",
      contentType: "html",
    });
    var prevscrollTop = 0;
    var imageLowestScale = 0.8;
    var currentScale = 1;
    document.addEventListener("scroll", () => {
      var scrollTop = $(window).scrollTop();

      if (scrollTop >= $(window).height() * 0.65) {
        if (scrollTop - prevscrollTop >= 100) {
          prevscrollTop = scrollTop;
          if (currentScale - 0.025 >= imageLowestScale) {
            currentScale = currentScale - 0.025;
          }
          $(".plane-container").css("transform", "scale(" + currentScale + ")");
          $(".plane-container").css("opacity", currentScale);
        }

        //$(".plane-container").css("transform", "scale()");
      }
      if (
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight ===
        scrollTop
      ) {
        $(".plane-container").css("transform", "scale(1)");
        $(".plane-container").css("opacity", 1);
      }
      if (scrollTop <= $(window).height() * 0.65) {
        if (prevscrollTop - scrollTop >= 25) {
          prevscrollTop = scrollTop;
          if (currentScale + 0.025 <= 1) {
            currentScale = currentScale + 0.025;
          }
          $(".plane-container").css("transform", "scale(" + currentScale + ")");
          $(".plane-container").css("opacity", currentScale);
        }
      }
    });
  }

  render() {
    return (
      <div className={"section-container  " + this.props.className}>
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
          <div className="blob-animation circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <div className="blob-animation circle-small"></div>
            <LazyLoadImage className="map" alt="India Map" src={indiaMap} />
            <div className="scroll-arrow bounce">
              <LazyLoadImage src={scroll} alt="Scroll Arrow" />
            </div>
          </div>
          <div className="heading-container">
            <h1 className="type-wrap">
              {/* <!-- add static words/sentences here (i.e. text that you don't want to be removed)--> */}
              <span id="typed" className="typed"></span>
            </h1>
          </div>
        </div>
        <LazyLoadImage
          className="bubble1"
          alt="Bubble Effect 1"
          src={bubble1}
        />

        <LazyLoadImage
          className="bubble2"
          alt="Bubble Effect 2"
          src={bubble2}
        />
        <div className="plane-container">
          <LazyLoadImage
            id="#plane"
            className="plane"
            alt="Home Page Plane"
            src={plane}
          />
        </div>
        <div className="about-me-container">
          <h2 data-aos="fade-in">Hello, I'm Avish</h2>
          <p data-aos="fade-in">
            I create beautiful things, that make a difference. I turn ideas into
            reality. Innovation &amp; creativy are at the heart of everything I
            do. I strive to acheive perfection in every task I undertake.
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. */}
          </p>
        </div>
        <div className="wave-container">
          <LazyLoadImage className="wave" alt="Home Page Wave" src={wave} />
        </div>
        <div className="skillz-main-container">
          <Skillz
            src={skillz1}
            alt="Microphone"
            title="Strong Direction"
            className="left"
          >
            My day-to-day involves giving direction on development strategy,
            architecture and design as well as being hands on when it comes to
            execution of complicated tasks. I also interact with client's on a
            daily basis to ensure top quality delivery.
          </Skillz>
          <Skillz
            src={skillz2}
            alt="Book"
            title="Deep Strategy"
            className="right"
          >
            I bring strategic thought to the forefront with every project. I
            always take the time to do the research and use it to create great
            experiences that deliver on client needs and business objectives.
          </Skillz>
          <Skillz
            src={skillz3}
            alt="Bucket"
            title="Rockin Code"
            className="left"
          >
            Being creative and efficient is at the heart of everything I do. I’m
            obsessed with current trends and always strive to create “what’s
            next in technology” to push clients forward and help them acheive
            maximum results with minimal investments.{" "}
          </Skillz>
        </div>
        <InfoBox
          src1={homepage}
          alt1="Devomark Desktop Home"
          src2={mobileHome}
          alt2="Devomark Mobile Homepage"
          title="Devomark"
          className="left tab-mobile"
          marginTop="650"
          link="/devomark"
          circleColor="#1bd3ca"
        >
          Devomark needed to improve their online presence in the digital agency
          space. So they approached me as part of their bold rebrand. With speed
          and scalability seo optimization was also one of their key concerns.
          The entire project took around 2 months to complete.
        </InfoBox>

        <InfoBox
          src1={mobileSplash}
          alt1="Formdesk Splash"
          src2={mobileLogin}
          alt2="Formdesk App Login"
          title="Formdesk"
          className="right dual-mobile"
          marginTop="300"
          link="/formdesk"
          circleColor="#1bd3ca"
        >
          FormDesk was one of my first experiences as a project manager handling
          a team of 6 people. The goal was to create a large scale web
          application which organizations could use internally to create,
          distribute and manage various forms. It was a very intense experience
          from the start with very strict deadlines. The entire project turned
          out to be a great learning experience and helped me mature as a
          project manager greatly.
        </InfoBox>
        <InfoBox
          src1={morphLab}
          alt1="Morphlab"
          title="Morphlab"
          className="left desktop"
          marginTop="300"
          link="/morphlab"
          circleColor="#1bd3ca"
        >
          Morphlab was not just about developing a simple static website. As
          Morphlab being an architectural studio wanted their website to be
          innovative and standout by not having a generic feel to it. Which
          resulted in custom UI/UX interface development. Having had no prior
          designing experience it was quite challenging but the finished product
          turned out to be beautiful and just what the client wanted.
        </InfoBox>
        {/*  <InfoBox
          src1={desktopContent}
          alt1="Bucket"
          src2={desktopContent}
          alt2="Devomark"
          title="Rockin Code"
          className="left dual-mobile"
          marginTop="250"
          link="/devomark"
        >
          My day-to-day involves giving direction on development strategy,
          architecture and design as well as being hands on when it comes to
          execution of complicated tasks. I also interact with client's on a
          daily basis to ensure top quality delivery.
        </InfoBox>
        <InfoBox
          src1={desktopContent}
          alt1="Bucket"
          src2={desktopContent}
          alt2="Bucket 2"
          title="Savrai"
          className="right tab-mobile"
          marginTop="250"
          link="/savrai"
        >
          My day-to-day involves giving direction on development strategy,
          architecture and design as well as being hands on when it comes to
          execution of complicated tasks. I also interact with client's on a
          daily basis to ensure top quality delivery.
        </InfoBox>
        <InfoBox
          src1={desktopContent}
          alt1="Bucket"
          src2={desktopContent}
          alt2="Bucket 2"
          title="Rl Agent"
          className="right tab-mobile"
          marginTop="250"
          link="/rlagent"
        >
          My day-to-day involves giving direction on development strategy,
          architecture and design as well as being hands on when it comes to
          execution of complicated tasks. I also interact with client's on a
          daily basis to ensure top quality delivery.
        </InfoBox> */}
        <div className="wave-container2">
          <LazyLoadImage className="wave" alt="Home Page Wave2" src={wave2} />
        </div>

        <div className="circle-section circle-2">
          <div className="blob-animation circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <div className="blob-animation circle-small"></div>
            <LazyLoadImage className="map" alt="India Map" src={indiaMap} />
          </div>

          <div className="heading-container">
            <h1 className="type-wrap" data-aos="fade-in">
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
          <LazyLoadImage alt="Bubble Effect 4" src={bubble4} />
        </div>
        <div className="bubble5">
          <LazyLoadImage alt="Bubble Effect 5" src={bubble5} />
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
