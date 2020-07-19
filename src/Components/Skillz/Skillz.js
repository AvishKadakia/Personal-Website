import React from "react";
import "./Skillz.scss";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Skillz extends React.Component {
  componentDidMount() {}

  render() {
    let desk = 100 / 1920;
    //let mul = 100 / 800;
    let containerStyle = {
      marginTop: this.props.marginTop * desk + "vw",
    };
    if (window.innerWidth < 800) {
      containerStyle = {};
    }
    return (
      <div className="skillz-outer-container">
        <div
          className={"skillz-container " + this.props.className}
          style={containerStyle}
        >
          <div className="blob-animation skillz-circle"></div>
          <div data-aos="fade-in" className="skillz-image">
            <LazyLoadImage
              data-aos="fade-in"
              src={this.props.src}
              alt={this.props.alt}
            />
          </div>
          <h3 data-aos="fade-in">{this.props.title}</h3>
          {this.props.label !== undefined ? (
            <h4 data-aos="fade-in">{this.props.label}</h4>
          ) : null}
          <p data-aos="fade-in"> {this.props.children}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Skillz);
