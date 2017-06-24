import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { search } from './reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let store = createStore(search, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
