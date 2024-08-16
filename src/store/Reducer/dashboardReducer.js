const initialState = {
  dashboardList: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DASHBOARD_LISTING":
      return {
        ...state,
        dashboardList: action.payload,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
