//////Only Plus//////////
<Tr className="AddNewRow">
                <Td className="AddNewColumn">
                  <div
                    onClick={() => this.setState({ popupOpen: "addContainer" })}
                    className="addButton"
                  ></div>
                </Td>
              </Tr>
////////////////
/////Form Feild////////////
<Tr className="formFeildRow">
<div class="row-button-container">
                  <div className="edit-button"></div>
                </div>
</Tr>
/////-------WIth Plus ICON--------/////
 <Td className="formFeildColumn">
                  <div
                    onClick={() => this.setState({ popupOpen: "addContainer" })}
                    className="addButton"
                  ></div>
                </Td>
/////----------------------------/////
/////--------WITH Label AND EDIT BUTTON------/////

<Td className="formFeildColumn">
                  <div className="info-container">
                    <Label>Personal Details</Label>
                    <div className="edit-button"></div>
                  </div>
                </Td>
/////----------------------------/////
///////////////
/////Section Title////////////
<Tr className="SectionTitleRow">
                <Td className="SectionTitleColumn">
                  <div className="info-container">
                    <Label>Personal Details</Label>
                    <div className="edit-button"></div>
                  </div>
                </Td>
              </Tr>
///////////////

















// for (var layout in currForm["layouts"]) {
//     if (currForm["layouts"][layout]["id"] === this.state.editRow) {
//     for (var content in currForm["layouts"][layout]["contents"]) {
//         if (currForm["layouts"][layout]["contents"][content]["id"] === this.state.editColumn) {
//       if (feildName === "feildType") {
//         value = currForm["layouts"][layout]["contents"][content]["feildType"];
//       }
//       if (currForm["layouts"][layout]["contents"][content]["feildType"] === "Input Box") {
//         //feild dependent values
//       }
      
//     }
// }
//   }
// }