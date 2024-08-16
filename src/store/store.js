import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";

import rootReducer from "./Reducer/index.js";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga.js";

const sagaMiddleware = createSagaMiddleware();

const persistedState = localStorage.getItem("myStore")
  ? JSON.parse(localStorage.getItem("myStore"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  localStorage.setItem("myStore", JSON.stringify(store.getState()));
});

export default store;
