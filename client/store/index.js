import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

let store = null;

export default {
	configureStore: () => {
		const reducers = combineReducers({});

		store = createStore(reducers, applyMiddleware(thunk));

		return store;
	},

	currentStore: () => {
		return store;
	}
};
