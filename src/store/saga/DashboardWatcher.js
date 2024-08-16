import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

function* handleCall(action) {
  try {
    const response = yield call(
      axios.get,
      "http://52.168.1.54:8080/api/v1/userActivities"
    );
    const data = response.data; // Accessing the actual data from the response
    console.log("RESPONSE", data);
    yield put({ type: "SET_DASHBOARD_LISTING", payload: data });
  } catch (error) {
    console.error("Error fetching data:", error.message || error);
  }
}

export function* DashboardWatcher() {
  yield takeLatest("GET_DASHBOARD_LISTING", handleCall);
}
