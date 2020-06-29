//import next from "../jsx/Animation";
//import $ from "jquery";
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
