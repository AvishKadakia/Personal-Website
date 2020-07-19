import React from "react";
import "./Devomark.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Particle from "../Particle/Particle";
import InfoBox from "../InfoBox/InfoBox";
import WorkContainer from "../WorkContainer/WorkContainer";
import Pallette from "../Pallette/Pallette";
import MobileView from "../MobileView/MobileView";
import WebView from "../WebView/WebView";
import { LazyLoadImage } from "react-lazy-load-image-component";

let logo =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/logo.png";
let homepage =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/homepage.png";
let services =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/services.png";
let about =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/about.png";
let contact =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/contact.png";
let mobileLogo =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/mobileLogo.png";
let mobileHome =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/mobileHome.jpeg";
let mobileService =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/mobileService.jpeg";
let mobileNav =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/mobileNav.jpeg";
let mobileAbout =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/mobileAbout.jpeg";
let mobileAddress =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/devomark/mobileAddress.jpeg";
let scroll2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/scroll2.svg";
let splatterDark =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/splatterdark.png";
let wave =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/wave.png";

class Devomark extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {}

  render() {
    return (
      <div className={"Devomark-container  " + this.props.className}>
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
            <LazyLoadImage alt="Splatter Dark" src={splatterDark} />>
          </div>
          <div className="circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <div className="blob-animation circle-small"></div>
            <div className="wine"></div>
            <div className="scroll-arrow bounce">
              <LazyLoadImage src={scroll2} alt="Scroll Arrow" />
            </div>
            <div className="heading-container">
              <h1 className="type-wrap typed">Devomark</h1>
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
                  src={homepage}
                  alt="Devomark Website Homepage Screenshot"
                />
                >
              </div>
            </div>
            <div className="work-info-container">
              <h2>What is Devomark?</h2>
              <p>
                Devomark Enterprises Pvt. Ltd. is a broad based,
                multi-disciplinary, design and Development Company based in
                Mumbai, India. Their work has covered the gamut of media and
                styles - from the solidly corporate to the totally quirky.
              </p>
            </div>
          </div>
          <InfoBox
            src1={homepage}
            alt1="Devomark homepage desktop view"
            src2={mobileHome}
            alt2="Devomark mobile desktop view"
            title="My Experience"
            className="right tab-mobile"
            circleColor="#ffad37"
            marginTop="150"
          >
            As scalability and speed were their main concern React was my
            framework of choice along with php for the backend. I did not have
            extensive experience with React before the project apart from having
            tinkered with it on some small projects. But in the end it worked
            out great and the folks at Devomark were quite impressed with the
            efficiency of work and final output.
          </InfoBox>
          <div className="wave-container">
            <LazyLoadImage className="wave" alt="Wave" src={wave} />>
          </div>
          <Pallette
            fontName="Montserrat"
            fontFamily="MontserratRegular"
            color1="#d67a0f"
            color2="#000"
            color3="#fff"
            color4="#3c3c3c"
            color5="#464646"
            color6="#525252"
          ></Pallette>
          <MobileView
            mobileScreens={[
              mobileLogo,
              mobileHome,
              mobileAbout,
              mobileService,
              mobileNav,
              mobileAddress,
            ]}
          ></MobileView>
          <WebView
            webScreens={[logo, homepage, services, about, contact]}
          ></WebView>
          <div className="container">
            <WorkContainer
              link="/formdesk"
              className="hand"
              title="Up next: FormDesk"
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
)(withRouter(Devomark));
