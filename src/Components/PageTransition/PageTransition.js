import React from "react";
import "./PageTransition.scss";
import { connect } from "react-redux";

class PageTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {
    if (localStorage.getItem("loadingNewPage") === "true") {
      setTimeout(function () {
        document.querySelector(".page-transition-2").classList.toggle("active");
        document.querySelector(".page-transition").classList.toggle("active");
      }, 100);
      localStorage.setItem("loadingNewPage", false);
    } else {
      document.querySelector(".page-transition-2").style.visibility = "hidden";
      document.querySelector(".page-transition").style.visibility = "hidden";
      document.querySelector(".page-transition-2").classList.remove("active");
      document.querySelector(".page-transition").classList.remove("active");
    }

    var els = document.querySelectorAll(
      "a[href='" + window.location.pathname + "']"
    );
    // console.log(
    //   "Current Location " +
    //     window.location.pathname +
    //     " Previous Location " +
    //     localStorage.getItem("previousPage")
    // );
    if (els !== undefined) {
      for (var i = 0, l = els.length; i < l; i++) {
        var el = els[i];
        //console.log(el);
        el.parentElement.classList.toggle("active");
        //el.innerHTML = el.innerHTML.replace(/link1/gi, 'dead link');
      }
    }
    localStorage.setItem("previousPage", null);
  }

  render() {
    return (
      <div className={"pageTransition-container  " + this.props.className}>
        <div className="page-transition">
          <div className="top-box"></div>
          <div className="bottom-box"></div>
          <div className="loading-bar"></div>
        </div>
        <div className="page-transition-2">
          <div className="top-box"></div>
          <div className="bottom-box"></div>
          <div className="loading-bar">
            <div className="load-fill"></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PageTransition);
