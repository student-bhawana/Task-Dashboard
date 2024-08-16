import { combineReducers } from "redux";
import DashboardR from "./dashboardReducer";

const appReducer = combineReducers({
  DashboardReducer: DashboardR,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
    localStorage.removeItem("myStore");
  }
  return appReducer(state, action);
};

export default rootReducer;
