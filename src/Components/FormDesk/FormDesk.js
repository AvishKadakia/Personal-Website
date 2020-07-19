import React from "react";
import "./FormDesk.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Particle from "../Particle/Particle";
import InfoBox from "../InfoBox/InfoBox";
import WorkContainer from "../WorkContainer/WorkContainer";
import Pallette from "../Pallette/Pallette";
import MobileView from "../MobileView/MobileView";
import WebView from "../WebView/WebView";

//Logo
let logo =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/logo.png";
//Mobile Images
let mobileLogin =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileLogin.png";
let mobileSplash =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileSplash.png";
let mobileDigitalSignature =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileDigitalSignature.jpeg";
let mobileNav =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileNav.png";
let mobileFormsTable =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileFormsTable.png";
let mobileTask =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileTask.png";
let mobileFormFill =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/mobileFormFill.png";
//Desktop Images
let digitalSignature =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/digitalSignature.png";
let roleTable =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk//roleTable.png";
let roleEditfrom =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/roleEdit.png";
let formTable =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/formTable.png";
let formCreation =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/formCreation.png";
let formEdit =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/formEdit.png";
let formFill =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/formFill.png";
let taskTable =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/taskTable.png";
let orgTable =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/formdesk/orgTable.png";
let scroll2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/scroll2.svg";
let splatterDark =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/splatterdark.png";
let wave =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/wave.png";

class FormDesk extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {}

  render() {
    return (
      <div className={"FormDesk-container  " + this.props.className}>
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
            <div className="hand"></div>
            <div className="scroll-arrow bounce">
              <LazyLoadImage src={scroll2} alt="Scroll Arrow" />
            </div>
            <div className="heading-container">
              <h1 className="type-wrap typed">FormDesk</h1>
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
                  src={formTable}
                  alt="Formdesk Website Homepage Screenshot"
                />
              </div>
            </div>
            <div className="work-info-container">
              <h2>What is Formdesk?</h2>
              <p>
                Formdesk lets an organization design online forms such as
                application forms, registration forms, order forms and surveys.
                Designing forms can be done online because Formdesk is a
                web-based tool, also called SaaS (Software as a
                Service).Therefore the user does not have to install any
                software on their systems. Employees can then register on
                Formdesk to gain access to these forms. Forms created and filled
                on Formdesk are contained within an organization in order to
                secure data between multiple organizations.
              </p>
            </div>
          </div>
          <InfoBox
            src1={mobileSplash}
            alt1="Formdesk Mobile App Splash Screen"
            src2={mobileLogin}
            alt2="Formdesk Mobile App Login"
            title="My Experience"
            className="right dual-mobile"
            circleColor="#00ed86"
            marginTop="150"
          >
            Formdesk's development journey was filled with surprises. As it
            required development of many custom features and it being my first
            experience as a project manager. In the end it was a very rewarding
            endeavour which gave me the confidence to guide multiple teams while
            still meeting deadlines and delivering quality product.
          </InfoBox>
          <InfoBox
            src1={digitalSignature}
            alt1="Formdesk Digital Signature Demo"
            src2={mobileDigitalSignature}
            alt2="Morph Lab Mobile View Homepage"
            title="Embedded Digital Signature"
            className="left tab-mobile"
            circleColor="#00ed86"
            marginTop="150"
          >
            Formdesk required development of a custom customer signature
            integration module. The module needed to get and store user's
            digital signatures in a secure format and had to be designed from
            scratch. The signature module also needed to map relation between
            the various dynamic forms and the stored signatures. The
            architecture was quite challenging to build but with proper planning
            we were able to achieve the desired output.
          </InfoBox>
          <div className="wave-container">
            <LazyLoadImage className="wave" alt="Wave" src={wave} />
          </div>
          <Pallette
            fontName="Montserrat"
            fontFamily="MontserratRegular"
            color1="#008323"
            color2="#000"
            color3="#fff"
            color4="#fe8483"
            color5="#1473e6"
            color6="#555"
          ></Pallette>
          <MobileView
            mobileScreens={[
              mobileSplash,
              mobileLogin,
              mobileFormFill,
              mobileNav,
              mobileFormsTable,
              mobileTask,
            ]}
          ></MobileView>
          <WebView
            webScreens={[
              logo,
              roleTable,
              roleEditfrom,
              formTable,
              formCreation,
              formEdit,
              formFill,
              taskTable,
              orgTable,
            ]}
          ></WebView>
          <div className="container">
            <WorkContainer
              link="/morphlab"
              className="key"
              title="Up next: Morphlab"
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
)(withRouter(FormDesk));
