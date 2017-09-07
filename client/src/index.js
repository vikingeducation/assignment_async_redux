import React from "react";
import ReactDOM from "react-dom";
import "jquery/src/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { booksApp } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  booksApp,
  composeWithDevTools(applyMiddleware(thunk))
);

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app(), document.getElementById("root"));
registerServiceWorker();
