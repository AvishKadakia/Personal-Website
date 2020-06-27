import React from "react";
import "./Button.scss";
import { connect } from "react-redux";
import isOnline from "is-online";
import { Animated } from "react-animated-css";
import $ from "jquery";
import Popup from "../Popup/Popup";
import PopupSection from "../PopupSection/PopupSection";
let error = "";
let shown = false;
class Button extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      loadPopUp: false,
    };
  }
  buttonCall() {
    let currOrg = "";
    isOnline().then((online) => {
      if (online) {
        if (this.props.sessionInfo.currentLoginRole !== undefined) {
          if (this.props.sessionInfo.currentLoginRole !== "Super Admin") {
            currOrg = this.props.sessionInfo.currentOrganisation;
            let that = this;
            that.setState({ loadPopUp: true });
            $.ajax({
              url:
                "https://api.formdesk.in/organization/" +
                that.props.sessionInfo.currentOrganisation,

              method: "GET", // *GET, POST, PUT, DELETE, etc.
              contentType: false,
              cache: false,
              cors: true,
              processData: false,
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + that.props.sessionInfo.token,
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: "follow", // manual, *follow, error
              referrerPolicy: "no-referrer", // no-referrer, *client

              success: function (response, request) {
                let obj = response;
                if (obj !== undefined) {
                  let abc = {};
                  abc[currOrg] = obj.organizationJSON;
                  that.props.StoreSessionInfo({
                    organisationData: abc,
                  });
                }
                that.props.UpdateData();
                // console.log("Data Refreshed");

                that.setState({ loadPopUp: false });

                that.props.onClick();

                // alert(obj.Visit.VisitId);
              },
              error: function (e) {
                alert("Unable to refresh Data");
              },
            });
            // fetch(
            //   "https://api.formdesk.in/organization/" +
            //     this.props.sessionInfo.currentOrganisation,
            //   {
            //     method: "GET", // *GET, POST, PUT, DELETE, etc.
            //     mode: "cors", // no-cors, *cors, same-origin
            //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //     credentials: "same-origin", // include, *same-origin, omit
            //     headers: {
            //       "Content-Type": "application/json",
            //       Authorization: "Bearer " + this.props.sessionInfo.token,
            //       // 'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     redirect: "follow", // manual, *follow, error
            //     referrerPolicy: "no-referrer", // no-referrer, *client
            //   }
            // )
            //   .then((response) => {
            //     return response.json();
            //   })
            //   .then((data) => {
            //     if (data !== undefined) {
            //       let abc = {};
            //       abc[currOrg] = data.organizationJSON;
            //       this.props.StoreSessionInfo({
            //         organisationData: abc,
            //       });
            //     }
            //     this.props.UpdateData();
            //     console.log("Data Refreshed");
            //     this.props.onClick();
            //   });
          } else {
            //     fetch("https://api.formdesk.in/login", {
            //       method: "POST", // *GET, POST, PUT, DELETE, etc.
            //       mode: "cors", // no-cors, *cors, same-origin
            //       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //       credentials: "same-origin", // include, *same-origin, omit
            //       headers: {
            //         "Content-Type": "application/json"
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //       },
            //       redirect: "follow", // manual, *follow, error
            //       referrerPolicy: "no-referrer", // no-referrer, *client
            //       body: JSON.stringify({
            //         email: this.props.form[form]["inputBox"]["loginEmail"]["value"],
            //         password: this.props.form[form]["inputBox"]["loginPassword"]["value"]
            //       })
            //     })
            //       .then((res) => {
            //         if (res.status === 200) {
            //     this.props.StoreSessionInfo({
            //       email: data.emailid,
            //       role: data.role,
            //       roleKey: "0",
            //       organisation: data.organizationName,
            //       organisationData: data.data.organizationdata,
            //       superAdminData: JSON.parse(data.data.superadmindata),
            //       token: data.token
            //     });
            //   }

            // });

            //Super admin data update here
            this.props.onClick();
          }
        } else {
          this.props.onClick();
        }
      } else {
        alert("Please Connect To The Internet & Refresh the page");
      }
    });
  }
  displayError() {
    if (
      this.props.id !== "loginButton" &&
      this.props.id !== "forgotPassword" &&
      this.props.id !== "changePasswordButton"
    ) {
      if (error.message !== "") {
        alert(error.message);
        if (document.getElementById(this.props.id).closest("form") !== null) {
          this.props.FormError({
            form: document.getElementById(this.props.id).closest("form").id,
            type: "failure",
            message: "",
          });
        } else {
          if (
            document.getElementById("formInfoForm") !== undefined &&
            document.getElementById("formInfoForm") !== null &&
            document.getElementById("formInfoForm") !== ""
          ) {
            this.props.FormError({
              form: "formInfoForm",
              type: "failure",
              message: "",
            });
          } else {
            this.props.FormError({
              form: "temp",
              type: "failure",
              message: "",
            });
          }
        }
      }
    } else {
      return (
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
          animationInDelay="0"
          animationOutDelay="0"
          animationInDuration="300"
          animationOutDuration="300"
          animateOnMount={true}
        >
          <div className={"form-error-" + error.type}>
            {error.message !== null ? error.message : null}
          </div>
        </Animated>
      );
    }
  }
  render() {
    let desk = 100 / 1920;
    let mul = 100 / 800;
    let buttonStyle = {
      width: this.props.width ? this.props.width * desk + "vw" : "100%",
      height: this.props.height ? this.props.height * desk + "vw" : "100%",
      backgroundColor: this.props.backgroundColor,
      paddingLeft: this.props.paddingLeft * desk + "vw",
      paddingRight: this.props.paddingRight * desk + "vw",
      paddingTop: this.props.paddingTop * desk + "vw",
      paddingBottom: this.props.paddingBottom * desk + "vw",
      marginLeft: this.props.marginLeft * desk + "vw",
      marginRight: this.props.marginRight * desk + "vw",
      marginTop: this.props.marginTop * desk + "vw",
      marginBottom: this.props.marginBottom * desk + "vw",
      color: this.props.color,
      fontSize: this.props.fontSize * desk + "vw",
      textAlign: this.props.textAlign,
    };
    if (window.innerWidth < 800) {
      buttonStyle = {
        //width: this.props.width ? this.props.width * mul + "vw" : "100%",
        //height: this.props.height ? this.props.height * mul + "vw" : "100%",
        backgroundColor: this.props.backgroundColor,
        //paddingLeft: this.props.paddingLeft * mul + "vw",
        //paddingRight: this.props.paddingRight * mul + "vw",
        //paddingTop: this.props.paddingTop * mul + "vw",
        //paddingBottom: this.props.paddingBottom * mul + "vw",
        //marginLeft: this.props.marginLeft * mul + "vw",
        //marginRight: this.props.marginRight * mul + "vw",
        //marginTop: this.props.marginTop * mul + "vw",
        //marginBottom: this.props.marginBottom * mul + "vw",
        color: this.props.color,
        fontSize: this.props.fontSize * mul + "vw",
        textAlign: this.props.textAlign,
      };
    }
    if (this.props.error !== undefined) {
      error = this.props.error;
    } else {
      error = {
        type: "",
        message: "",
      };
    }

    return (
      <React.Fragment>
        <Animated
          animationIn="flipInX"
          animationOut="fadeOut"
          isVisible={true}
          animationInDelay="0"
          animationOutDelay="0"
          animationInDuration="1000"
          animationOutDuration="1000"
          animateOnMount={true}
        >
          <div className="button-flex-container">
            <div
              style={buttonStyle}
              id={this.props.id}
              className={
                this.props.icon !== undefined &&
                this.props.icon !== null &&
                this.props.icon !== ""
                  ? "button-container icon-button-class " + this.props.className
                  : "button-container " + this.props.className
              }
              name={this.props.name}
              title={this.props.children}
              onClick={() => {
                if (
                  this.props.id === "addRoleButton" ||
                  this.props.id === "fillFormButton" ||
                  this.props.id === "addFormButton" ||
                  this.props.id === "userAddButton" ||
                  this.props.id === "taskAddButton" ||
                  this.props.id === "addDocumentButton" ||
                  this.props.id === "addOrganisationButton" ||
                  this.props.icon === "edit" ||
                  this.props.icon === "view"
                ) {
                  this.buttonCall();
                } else {
                  this.props.onClick();
                }
              }}
            >
              {this.props.icon !== undefined &&
              this.props.icon !== null &&
              this.props.icon !== "" ? (
                <Animated
                  animationIn="zoomIn"
                  animationOut="fadeOut"
                  isVisible={true}
                  animationInDelay="0"
                  animationOutDelay="0"
                  animationInDuration="1000"
                  animationOutDuration="1000"
                  animateOnMount={true}
                >
                  <div
                    className={"icon-button " + this.props.icon}
                    title={this.props.icon}
                  >
                    <i className={"fa " + this.props.faicon + " icon"}></i>
                  </div>
                </Animated>
              ) : (
                this.props.children
              )}
            </div>
            {error.message !== undefined && error.message !== ""
              ? this.displayError()
              : null}
          </div>
        </Animated>
        {this.state.loadPopUp ? (
          <Popup>
            <PopupSection
              width="449"
              title=""
              line="True"
              marginTop="10"
              close="False"
              // closeOnClick={() => this.changePasswordPopupToggle()}
            >
              <div class="upload-popupcontainer">
                <div id="loader"></div>
                <div class="uploadingText">Loading...</div>
              </div>
            </PopupSection>
          </Popup>
        ) : null}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sessionInfo: { ...state.sessionInfo },
    organisation: { ...state.organisation },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    StoreSessionInfo: (input) =>
      dispatch({
        type: "StoreSessionInfo",
        value: input,
      }),
    UpdateData: (input) =>
      dispatch({
        type: "UpdateData",
        value: input,
      }),
    FormError: (input) =>
      dispatch({
        type: "FormError",
        value: input,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
