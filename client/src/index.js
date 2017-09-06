import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import booksApp from "./reducers";

const store = createStore(booksApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
