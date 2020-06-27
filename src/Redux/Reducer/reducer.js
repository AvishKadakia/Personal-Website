//import next from "../jsx/Animation";
import ValidationChecks from "../CommonScripts/InputValidation";
import $ from "jquery";
const initialState = {
  sessionInfo: {
    isAuthenticted: false,
    // currentLoginEmail: "admin@test.com",
    // currentLoginRole: "Admin",
    // currentRoleKey: "0",
    // currentOrganisation: "proferotechno",
    // token: ""
  },
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  let checkForError = 0;
  let errorForm = "";
  let key = "";
  let logData = {};

  switch (action.type) {
    case "UpdateData": {
      console.log(newState);
      break;
    }

    default: {
      break;
    }
  }

  return newState;
};

export default reducer;
