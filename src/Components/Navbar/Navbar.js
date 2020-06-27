import React from "react";
import "./Navbar.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../Images/logo2.png";
import WhatsappIcon from "../../Images/whatsapp-icon.png";
import linkdenIcon from "../../Images/linkden-icon.png";
import instaIcon from "../../Images/insta-icon.png";
import $ from "jquery";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { changePasswordPopupStatus: false };
  }
  getYear() {
    var dt = new Date();
    return dt.getFullYear();
  }
  componentDidMount() {
    let navLinks = document.querySelectorAll("a");
    let that = this;

    if (navLinks) {
      navLinks.forEach((link) => {
        if (link.classList.contains("link")) {
          link.onclick = (e) => {
            let body = document.querySelector("body");
            e.preventDefault();

            if (
              window.location.href !== e.srcElement.href &&
              window.location.href !== e.srcElement.parentElement.href
            ) {
              document
                .querySelector(".page-transition")
                .classList.toggle("active");
              setTimeout(function () {
                if (!e.srcElement.parentElement.href) {
                  localStorage.setItem("loadingNewPage", true);
                  localStorage.setItem("previousPage", window.location.href);
                  window.location = e.srcElement.href;
                } else {
                  localStorage.setItem("loadingNewPage", true);
                  window.location = e.srcElement.parentElement.href;
                  localStorage.setItem("previousPage", window.location.href);
                }
              }, 500);
            }
          };
        }
      });
    }
  }

  hideElements() {
    //Hide Extra Elements
    document.querySelector(".right-navLink").classList.toggle("fade");
    document.querySelector(".left-navLink").classList.toggle("fade");
    document.querySelector(".copyright").classList.toggle("fade");
    document.querySelector(".social-icon-container").classList.toggle("fade");
  }
  hamburgerClick() {
    document.querySelector(".bubble").classList.toggle("active");
    document.querySelector(".bubbleback").classList.toggle("active");
    document.querySelector(".first").classList.toggle("active");
    document.querySelector(".second").classList.toggle("active");
    document.querySelector(".third").classList.toggle("active");
    document.querySelector(".menu-container").classList.toggle("active");

    setTimeout(() => this.hideElements(), 500);
  }
  PageTransition(e, nextPage) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="navigation-container">
        <div className="navbar">
          <div className="leftBar">
            <div className="navLink left-navLink">
              <a class="link" href="/about">
                About Me
              </a>
            </div>
            <div className="copyright">
              <h4>&#169; Avish Kadakia {this.getYear()}</h4>
            </div>
          </div>
          <div className="rightBar">
            <div className="logo">
              <a class="link" href="/">
                <img src={logo} alt="logo"></img>
              </a>
            </div>
            <nav className="navbar-container">
              <div class="hamburger">
                <div class="bubbleback"></div>
                <div class="bubble"></div>
                <div class="bubble-wrap" onClick={() => this.hamburgerClick()}>
                  <div class="bar first"></div>
                  <div class="bar second"></div>
                  <div class="bar third"></div>
                </div>
              </div>
              <div className="menu-container">
                <div className="nav-column">
                  <h2 className="nav-title">About</h2>
                  <div className="nav-item">
                    <a class="link" href="/">
                      Home
                    </a>
                  </div>
                  <div className="nav-item">
                    <a class="link" href="/about">
                      My Story
                    </a>
                  </div>
                </div>
                <div className="nav-column double-column">
                  <h2 className="nav-title">Work</h2>
                  <div className="nav-item float-left">
                    <a class="link" href="/formdesk">
                      FormDesk
                    </a>
                  </div>
                  <div className="nav-item float-right">
                    <a class="link" href="/savrai">
                      SAVARAI
                    </a>
                  </div>

                  <div className="nav-item float-left">
                    <a class="link" href="/morphlab">
                      Morphlab
                    </a>
                  </div>
                  <div className="nav-item float-right">
                    <a class="link" href="/rlagent">
                      RL Agent
                    </a>
                  </div>
                  <div className="nav-item float-left">
                    <a class="link" href="/devomark">
                      Devomark
                    </a>
                  </div>
                </div>
                <div className="nav-column">
                  <h2 className="nav-title">Contact</h2>
                  <div className="nav-item">
                    <a class="link" href="/contact">
                      Let's Talk
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="navLink right-navLink">
              <a class="link" href="/contact">
                Contact Me
              </a>
            </div>
            <div className="social-icon-container">
              <div class="social-media-icon">
                <a href="https://api.whatsapp.com/send?phone=+917977905493">
                  <img src={WhatsappIcon} alt="Whatsapp Icon"></img>
                </a>
              </div>

              <div class="social-media-icon">
                <a href="https://www.instagram.com/avishkadakia">
                  <img src={instaIcon} alt="Instagram Icon"></img>
                </a>
              </div>
              <div class="social-media-icon">
                <a href="https://www.linkedin.com/in/avish-kadakia-3a6591116">
                  <img src={linkdenIcon} alt="Linkden Icon"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessionInfo: { ...state.sessionInfo },
    roles: { ...state.roles },
    form: { ...state.form },
    organisation: { ...state.organisation },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    InputChangeHandle: (input) =>
      dispatch({
        type: "InputChangeHandle",
        value: input,
      }),
    FormError: (input) =>
      dispatch({
        type: "FormError",
        value: input,
      }),
    StoreSessionInfo: (input) =>
      dispatch({
        type: "StoreSessionInfo",
        value: input,
      }),
    UpdateData: (input) =>
      dispatch({
        type: "UpdateData",
        value: input,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
