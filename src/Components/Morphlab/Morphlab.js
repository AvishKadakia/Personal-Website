import React from "react";
import "./Morphlab.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Particle from "../Particle/Particle";
import InfoBox from "../InfoBox/InfoBox";
import WorkContainer from "../WorkContainer/WorkContainer";
import Pallette from "../Pallette/Pallette";
import MobileView from "../MobileView/MobileView";
import WebView from "../WebView/WebView";

let logo =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/logo.png";
let home =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/home.png";
let about =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/about.png";
let contact =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/contact.png";

let mobileLogo =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/mobile-logo.png";
let mobileHome =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/mobile-home.png";
let mobileNav =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/mobile-nav.png";
let mobileAbout1 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/mobile-about-1.png";
let mobileAbout2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/mobile-about-2.png";
let mobileContact =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/morphlab/mobile-contact.png";
let scroll2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/scroll2.svg";
let splatterDark =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/splatterdark.png";
let wave =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/wave.png";

class Morphlab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {}

  render() {
    return (
      <div className={"Morphlab-container  " + this.props.className}>
        <div className="background">
          {window.innerWidth > 800 ? (
            <Particle lineColor="#fff" lineOpacity="0.3"></Particle>
          ) : null}
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
          <div className="line" id="line4"></div>
          <div className="line" id="line5"></div>
        </div>
        <div className="circle-section">
          <div className="splatter">
            <LazyLoadImage alt="Splatter Dark" src={splatterDark} />
          </div>
          <div className="circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <div className="blob-animation circle-small"></div>
            <div className="key"></div>
            <div className="scroll-arrow bounce">
              <LazyLoadImage src={scroll2} alt="Scroll Arrow" />
            </div>
            <div className="heading-container">
              <h1 className="type-wrap typed">Morphlab</h1>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="background">
            <div className="line" id="line1"></div>
            <div className="line" id="line2"></div>
            <div className="line" id="line3"></div>
            <div className="line" id="line4"></div>
            <div className="line" id="line5"></div>
          </div>

          <div className="container container-1">
            <div className="outer-image">
              <div className="inner-image-1">
                <LazyLoadImage
                  src={home}
                  alt="Morphlab Website Homepage Screenshot"
                />
              </div>
            </div>
            <div className="work-info-container">
              <h2>What is Morphlab?</h2>
              <p>
                Morphlab is an award-winning, interdisciplinary architectural
                studio with residential and commercial projects built across the
                country. They pride themselves on being both designers and
                builders — creating architectural and creative solutions to help
                people realize their vision and make them a reality.
              </p>
            </div>
          </div>
          <InfoBox
            src1={mobileLogo}
            alt1="Morph Lab Mobile View Logo"
            src2={mobileHome}
            alt2="Morph Lab Mobile View Homepage"
            title="My Experience"
            className="right dual-mobile"
            circleColor="#1b3ed3"
            marginTop="150"
          >
            Morphlab was my first designing and prototyping experience with
            development. The prototyping and wire-framing were done using adobe
            XD. Development was done using vanilla html and css as it was a
            static website I did not want to use any framework and slow down the
            performance of the website. The entire project from designing to
            development took around 3 months and greatly helped to improve my
            designing skills
          </InfoBox>
          <div className="wave-container">
            <LazyLoadImage className="wave" alt="Wave" src={wave} />
          </div>
          <Pallette
            fontName="Montserrat"
            fontFamily="MontserratRegular"
            color1="#0b4f7a"
            color2="#000"
            color3="#fff"
            color4="#0b4f7a70"
            color5="#fff"
            color6="#8b8b8b"
          ></Pallette>
          <MobileView
            mobileScreens={[
              mobileLogo,
              mobileHome,
              mobileNav,
              mobileAbout1,
              mobileAbout2,
              mobileContact,
            ]}
          ></MobileView>
          <WebView webScreens={[logo, home, about, contact]}></WebView>
          <div className="container">
            <WorkContainer
              link="/devomark"
              className="bottle"
              title="Up next: Devomark"
            ></WorkContainer>
          </div>
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
)(withRouter(Morphlab));
