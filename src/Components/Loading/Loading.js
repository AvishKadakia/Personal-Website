import React from "react";
import "./Loading.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

const logo =
  "https://res.cloudinary.com/dleeu99na/image/upload/v1593753246/personal%20website/Images/logo2.png";
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {this.props.layout === "1" ? (
          <div className="Loading-container">
            <div className="loader-container">
              <div className="logo">
                <LazyLoadImage src={logo} alt="Avish Kadakia Website Logo" />
              </div>
            </div>
          </div>
        ) : (
          <div className="pageTransition-container">
            <div className="page-transition">
              <div className="top-box"></div>
              <div className="bottom-box"></div>
              <div className="loading-bar"></div>
            </div>
          </div>
        )}
      </React.Fragment>
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
)(withRouter(Loading));
