import React from "react";
import "./ContactPage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Skillz from "../Skillz/Skillz";
import contactplane from "../../Images/contactplane.png";
import scroll2 from "../../Images/scroll2.svg";
import splatterDark from "../../Images/splatterdark.png";
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
class ContactPage extends React.Component {
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
      <div className={"contact-container  " + this.props.className}>
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
            <img
              className="contact-plane"
              alt="Contact Plane"
              src={contactplane}
            ></img>
            <div className="scroll-arrow bounce">
              <img src={scroll2} alt="Scroll Arrow"></img>
            </div>
            <div className="heading-container">
              <h1 className="type-wrap typed">Float me a note</h1>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <div className="background">
            <div className="line" id="line1"></div>
            <div className="line" id="line2"></div>
            <div className="line" id="line3"></div>
            <div className="line" id="line4"></div>
            <div className="line" id="line5"></div>
          </div>

          <form action="">
            <div className="contact-form-card">
              <div className="input-field float-left">
                <input type="text" id="name" required autocomplete="off" />
                <label for="name">What's your name?</label>
              </div>
              <div className="input-field float-right">
                <input type="text" id="email" required autocomplete="off" />
                <label for="email">What's your e-mail address?</label>
              </div>
              <div className="input-field-textarea float-left">
                <textarea
                  type="text"
                  id="message"
                  required
                  autocomplete="off"
                  multiline
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                />
                <label for="message ">What's your message?</label>
              </div>
              {/* <div className="input-field">
                <input type="text" id="name" required />
                <label for="name">What's your message?</label>
              </div> */}
              <div className="send-button float-left">Send Message</div>
            </div>
          </form>
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
)(withRouter(ContactPage));
