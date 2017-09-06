import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initState = {};

const store = createStore(() => {}, applyMiddleware(thunk), initState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
