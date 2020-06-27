import React from "react";
import "./Footer.scss";
import { connect } from "react-redux";

class Footer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className={"footer-container hide-mobile " + this.props.className}>
        <div className="copyright-text">ALL Rights Reserved by formDesk</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: { ...state.form },
    sessionInfo: { ...state.sessionInfo }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    InputChangeHandle: (input) =>
      dispatch({
        type: "InputChangeHandle",
        value: input
      }),
    ChangeInputBoxValue: (input) =>
      dispatch({
        type: "ChangeInputBoxValue",
        value: input
      }),
    addSrcUrl: (input) =>
      dispatch({
        type: "addSrcUrl",
        value: input
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
