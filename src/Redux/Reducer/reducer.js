//import next from "../jsx/Animation";
//import $ from "jquery";
const initialState = {
  sessionInfo: {
    firstLoad: false,
    // currentLoginEmail: "admin@test.com",
    // currentLoginRole: "Admin",
    // currentRoleKey: "0",
    // currentOrganisation: "proferotechno",
    // token: ""
  },
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "UpdateFirstLoad": {
      newState.sessionInfo.firstLoad = action.value;
      console.log("Updated firstLoad " + newState.firstLoad);
      break;
    }

    default: {
      break;
    }
  }

  return newState;
};

export default reducer;
