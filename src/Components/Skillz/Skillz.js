import React from "react";
import "./Skillz.scss";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

class Skillz extends React.Component {
  componentDidMount() {
    AOS.init();
  }

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
            <img
              data-aos="fade-in"
              src={this.props.src}
              alt={this.props.alt}
            ></img>
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
