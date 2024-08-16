import { all } from "redux-saga/effects";
import { DashboardWatcher } from "./DashboardWatcher";

export function* rootSaga() {
  yield all([DashboardWatcher()]);
}
