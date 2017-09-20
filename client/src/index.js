import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
//import registerServiceWorker from "./registerServiceWorker";

import thunk from "redux-thunk";
import bookReducer from "./reducers";
const store = createStore(bookReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
