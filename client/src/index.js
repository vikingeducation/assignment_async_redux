import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";

//redux
import {createStore, applyMiddleware} from "redux";
import {goodreadsApp} from "./reducers";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'

let store = createStore(goodreadsApp, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById("root"));
registerServiceWorker();
