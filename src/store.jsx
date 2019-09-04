import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import combinedReducers from './redux/reducers/index';

const store = createStore(combineReducers(combinedReducers), {}, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
