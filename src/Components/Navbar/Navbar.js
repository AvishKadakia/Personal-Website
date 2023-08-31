import React from "react";
import "./Navbar.scss";
import { connect } from "react-redux";
//import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import resume from "../../Documents/Resume.pdf";
// import ReactGA from "react-ga";
// import auth from "./auth.ts"; // Sample authentication provider

// const trackingId = "UA-91489722-1"; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// });

let cvIcon =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/cv-icon.png";
let logo =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/logo2.png";
let WhatsappIcon =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/whatsapp-icon.png";
let linkdenIcon =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/linkden-icon.png";
let instaIcon =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753249/personal%20website/Images/insta-icon.png";
let githubIcon =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1644012485/personal%20website/Images/githubicon.png";
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
//let mouseX = 0;
//let mouseY = 0;
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
    AOS.init({ disable: "mobile" });

    let navLinks = document.querySelectorAll("a");
    if (navLinks) {
      navLinks.forEach((link) => {
        if (link.classList.contains("link")) {
          link.onclick = (e) => {
            e.preventDefault();
            console.log(link);

            if (window.location.href !== link.getAttribute("href")) {
              document
                .querySelector(".page-transition")
                .classList.toggle("active");
              setTimeout(function () {
                localStorage.setItem("loadingNewPage", true);
                localStorage.setItem("previousPage", window.location.href);
                window.location = link.getAttribute("href");
              }, 500);
            }
          };
        }
      });
    }
    setBorderRadius();
    setInterval(setBorderRadius, 1500);
    // document.addEventListener("mousemove", (e) => {
    //   mouseX = e.clientY;
    //   mouseY = e.clientX;
    //   document
    //     .querySelector(".cursor")
    //     .setAttribute(
    //       "style",
    //       "top: " +
    //         (mouseX - document.querySelector(".cursor").clientHeight / 2 + 0) +
    //         "px; left: " +
    //         (mouseY - document.querySelector(".cursor").clientWidth / 2 + 0) +
    //         "px;"
    //     );
    // });
    // $("a").hover(function () {
    //   document.querySelector(".cursor").classList.toggle("link-animate");
    // });
    // $(".bubble-wrap").hover(function () {
    //   document.querySelector(".cursor").classList.toggle("link-animate");
    // });
    // $(".send-button").hover(function () {
    //   document.querySelector(".cursor").classList.toggle("link-animate");
    // });
    // $(".input-field").hover(function () {
    //   document.querySelector(".cursor").classList.toggle("link-animate");
    // });
    // $(".input-field-textarea").hover(function () {
    //   document.querySelector(".cursor").classList.toggle("link-animate");
    // });
    //setInterval(this.setCursor, 100);
    if (document.getElementsByClassName("Loading-container")[0] !== undefined) {
      document.getElementsByClassName(
        "Loading-container"
      )[0].style.transitionDuration = "0.4s";
      document.getElementsByClassName("Loading-container")[0].style.top =
        "-10vh";

      setInterval(function () {
        if (
          document.getElementsByClassName("Loading-container")[0] !== undefined
        ) {
          document.getElementsByClassName(
            "Loading-container"
          )[0].style.transitionDuration = "1s";
          document.getElementsByClassName("Loading-container")[0].style.top =
            "-110vh";

          document.cookie = "loadedOnce=True";
        }
      }, 700);
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
        {/* <div className="cursor"></div> */}

        <div className="navbar">
          <div className="leftBar">
            <div className="navLink left-navLink">
              <a className="link" href="/about">
                About Me
              </a>
            </div>
            <div className="copyright">
              <h4>&#169; Avish Kadakia {this.getYear()}</h4>
            </div>
          </div>
          <div className="rightBar">
            <div className="logo">
              <a className="link" href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <nav className="navbar-container">
              <div className="hamburger">
                <div className="bubbleback"></div>
                <div className="bubble"></div>
                <div
                  className="bubble-wrap"
                  onClick={() => this.hamburgerClick()}
                >
                  <div className="bar first"></div>
                  <div className="bar second"></div>
                  <div className="bar third"></div>
                </div>
              </div>
              <div className="menu-container">
                <div className="nav-column">
                  <h2 className="nav-title">About</h2>
                  <div className="nav-item">
                    <a className="link" href="/">
                      Home
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="link" href="/about">
                      My Story
                    </a>
                  </div>
                </div>
                <div className="nav-column double-column">
                  <h2 className="nav-title">Work</h2>
                  <div className="nav-item float-left">
                    <a className="link" href="/devomark">
                      Devomark
                    </a>
                  </div>
                  <div className="nav-item float-right">
                    <a className="link" href="/savrai">
                      SAVARAI
                    </a>
                  </div>

                  <div className="nav-item float-left">
                    <a className="link" href="/morphlab">
                      Morphlab
                    </a>
                  </div>
                  <div className="nav-item float-right">
                    <a className="link" href="/rlagent">
                      RL Agent
                    </a>
                  </div>
                  <div className="nav-item float-left">
                    <a className="link" href="/formdesk">
                      FormDesk
                    </a>
                  </div>
                </div>
                <div className="nav-column">
                  <h2 className="nav-title">Contact</h2>
                  <div className="nav-item">
                    <a className="link" href="/contact">
                      Let's Talk
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="navLink right-navLink">
              <a className="link" href="/contact">
                Contact Me
              </a>
            </div>
            <div className="social-icon-container">
              <div className="social-media-icon">
                <a
                  href="https://api.whatsapp.com/send?phone=+917977905493"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={WhatsappIcon} alt="Whatsapp Icon" />
                </a>
              </div>

              <div className="social-media-icon">
                <a
                  href="https://www.instagram.com/avishkadakia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instaIcon} alt="Instagram Icon" />
                </a>
              </div>
              <div className="social-media-icon">
                <a
                  href="https://www.linkedin.com/in/avish-kadakia-3a6591116"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkdenIcon} alt="Linkden Icon" />
                </a>
              </div>
              <div className="social-media-icon">
                <a
                  href="https://github.com/AvishKadakia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="Github Icon" />
                </a>
              </div>
              <div className="social-media-icon">
                <a href="https://drive.google.com/file/d/1RnjpD8VUjXjOO0hnCjDbZRMEqkAG-pWi/view?usp=sharing">
                  <img src={cvIcon} alt="Resume" />
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    UpdateFirstLoad: (input) =>
      dispatch({
        type: "UpdateFirstLoad",
        value: input,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
