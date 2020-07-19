import React from "react";
import "./MobileView.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

class MobileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {}
  displayScreen() {
    let dom = [];
    for (var mobileScreen in this.props.mobileScreens) {
      dom.push(
        <div className="mobileScreen" key={mobileScreen}>
          <LazyLoadImage
            alt={this.props.mobileScreens[mobileScreen]}
            src={this.props.mobileScreens[mobileScreen]}
          />
        </div>
      );
    }
    return dom;
  }
  render() {
    return (
      <div className={"MobileViewcontainer  " + this.props.className}>
        {this.displayScreen()}
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
)(withRouter(MobileView));
