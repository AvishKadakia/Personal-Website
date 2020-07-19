import React from "react";
import "./InfoBox.scss";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

class InfoBox extends React.Component {
  componentDidMount() {}

  render() {
    let desk = 100 / 1920;
    let mul = 100 / 800;
    let containerStyle = {
      marginTop: this.props.marginTop * desk + "vw",
    };
    let circleStyle = {
      backgroundColor: this.props.circleColor,
    };
    let linkStyle = {
      color: this.props.linkColor,
    };
    if (window.innerWidth < 800) {
      containerStyle = {};
    }
    return (
      <div className="info-box-outer-container">
        <div
          className={"info-box-container " + this.props.className}
          style={containerStyle}
        >
          <div className="section-1">
            {this.props.circle === false ? null : (
              <div
                className="blob-animation info-circle"
                style={circleStyle}
              ></div>
            )}

            <div data-aos="fade-in" className="outer-image">
              <div className="inner-image-1">
                <LazyLoadImage
                  data-aos="fade-in"
                  src={this.props.src1}
                  alt={this.props.alt1}
                />
              </div>
              {this.props.src2 !== undefined ? (
                <div className="inner-image-2">
                  <LazyLoadImage
                    data-aos="fade-in"
                    src={this.props.src2}
                    alt={this.props.alt2}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="section-2">
            <h3 data-aos="fade-in">{this.props.title}</h3>
            {this.props.label !== undefined ? (
              <h4 data-aos="fade-in">{this.props.label}</h4>
            ) : null}
            <p data-aos="fade-in"> {this.props.children}</p>
            {this.props.link !== undefined ? (
              <div data-aos="fade-in" className="workpagelink">
                <a
                  className="link"
                  href={this.props.link}
                  style={{
                    color: this.props.linkColor
                      ? this.props.linkColor
                      : this.props.circleColor,
                  }}
                >
                  View Work
                </a>
              </div>
            ) : null}
          </div>
        </div>
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
