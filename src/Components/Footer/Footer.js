import React from "react";
import "./Footer.scss";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

class InfoBox extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="footer-container">
        Design inspired by{" "}
        <a href="http://andypatrickdesign.com/">
          <span class="footer-link"> Andy Patrick </span>
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBox);
