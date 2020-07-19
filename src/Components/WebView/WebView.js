import React from "react";
import "./WebView.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

class WebView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgotPasswordPopupStatus: false };
  }
  componentDidMount() {}
  displayScreen() {
    let dom = [];
    for (var webScreen in this.props.webScreens) {
      dom.push(
        <div className="webScreen" key={webScreen}>
          <LazyLoadImage
            alt={this.props.webScreens[webScreen]}
            src={this.props.webScreens[webScreen]}
          />
        </div>
      );
    }
    return dom;
  }
  render() {
    return (
      <div className={"WebViewcontainer  " + this.props.className}>
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
)(withRouter(WebView));
