const GET_DASHBOARD_LISTING = (data = [], callback) => {
  return {
    type: "GET_DASHBOARD_LISTING",
    payload: data,
    callback,
  };
};

const SET_DASHBOARD_LISTING = (data = {}, callback) => {
  return {
    type: "SET_DASHBOARD_LISTING",
    payload: data,
    callback,
  };
};

export { SET_DASHBOARD_LISTING, GET_DASHBOARD_LISTING };
