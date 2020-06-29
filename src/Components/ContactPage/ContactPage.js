import React from "react";
import "./ContactPage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import contactplane from "../../Images/contactplane.png";
import scroll2 from "../../Images/scroll2.svg";
import splatterDark from "../../Images/splatterdark.png";
import Particle from "../Particle/Particle";
import $ from "jquery";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {
    $("window").scrollTop("0px");
  }

  render() {
    return (
      <div className={"contact-container  " + this.props.className}>
        <div className="background">
          <Particle lineColor="#fff" lineOpacity="0.8"></Particle>
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
                <label for="email">What's your e-mail?</label>
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
