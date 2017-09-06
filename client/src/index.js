import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../stores';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const app = (
	<Provider store={store.configureStore()}>
		<App />
	</Provider>
);

render(app, document.getElementById('root'));
registerServiceWorker();
