import React from "react";
import "./ContactPage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Particle from "../Particle/Particle";

let contactplane =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/contactplane.png";
let scroll2 =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/scroll2.svg";
let splatterDark =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/splatterdark.png";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {}
  sendEmail() {
    alert(
      "Email service are temporarily down. Please feel free to contact me over whatsapp at +91 7977905493 or you can send an email me directly at avishkadakia1996@gmail.com"
    );
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
            <LazyLoadImage alt="Splatter Dark" src={splatterDark} />
          </div>
          <div className="circle-big">
            {/*Reference Website: https://codepen.io/FlorinPop17/pen/PooXqaQ */}
            <div className="blob-animation circle-small"></div>
            <LazyLoadImage
              className="contact-plane"
              alt="Contact Plane"
              src={contactplane}
            />

            <div className="scroll-arrow bounce">
              <LazyLoadImage src={scroll2} alt="Scroll Arrow" />
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
                <input type="text" id="name" required autoComplete="off" />
                <label htmlFor="name">What's your name?</label>
              </div>
              <div className="input-field float-right">
                <input type="text" id="email" required autoComplete="off" />
                <label htmlFor="email">What's your e-mail?</label>
              </div>
              <div className="input-field-textarea float-left">
                <textarea
                  type="text"
                  id="message"
                  required
                  autoComplete="off"
                  // onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                />
                <label htmlFor="message ">What's your message?</label>
              </div>
              {/* <div className="input-field">
                <input type="text" id="name" required />
                <label htmlFor="name">What's your message?</label>
              </div> */}
              <div
                className="send-button float-left"
                onClick={() => this.sendEmail()}
              >
                Send Message
              </div>
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
