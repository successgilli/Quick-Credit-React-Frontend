import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import combinedReducers from './redux/reducers/index';

const store = createStore(combineReducers(combinedReducers), {}, compose(applyMiddleware(thunk, logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
