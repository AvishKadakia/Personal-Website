import React from "react";
import "./WorkContainer.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="WorkContainer">
        <a className="link" href={this.props.link}>
          <div className={"work-container " + this.props.className}>
            <h3>{this.props.title}</h3>
          </div>
        </a>
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
)(withRouter(WorkContainer));
