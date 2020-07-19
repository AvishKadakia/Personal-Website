import React from "react";
import "./Pallette.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Pallette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className={"pallette-container  " + this.props.className}>
        <h3 className="title">Fonts &amp; Colors</h3>

        <div className="left-section">
          <h3
            className="font-name"
            style={{ fontFamily: this.props.fontFamily }}
          >
            {this.props.fontName}
          </h3>
          <div
            className="uppercase"
            style={{ fontFamily: this.props.fontFamily }}
          >
            a b c d e f g h i j k l m n o p q r s t v w x y z
          </div>

          <div
            className="lowercase"
            style={{ fontFamily: this.props.fontFamily }}
          >
            a b c d e f g h i j k l m n o p q r s t v w x y z
          </div>
          <div
            className="numbers"
            style={{ fontFamily: this.props.fontFamily }}
          >
            1 2 3 4 5 6 7 8 9
          </div>
        </div>
        <div className="right-section">
          <div className="color-container">
            <div
              className="color"
              style={{ backgroundColor: this.props.color1 }}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: this.props.color2 }}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: this.props.color3 }}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: this.props.color4 }}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: this.props.color5 }}
            ></div>
            <div
              className="color"
              style={{ backgroundColor: this.props.color6 }}
            ></div>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Pallette));
