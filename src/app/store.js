import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import reducers from '../store/reducers/auth'


/**
 *  This defines base configuration for setting up redux with react.
 *  All the middlewares are defined here and base store is created for provider.
 */

let middlewares = [];

//for promises, since we are using axios for networking
// middlewares.push(promise());

//for async operations, network calls
middlewares.push(thunk);

//smart console logging of actions
middlewares.push(logger);

// add freeze dev middleware
// this prevents state from being mutated anywhere in the app during dev
if (process.env.NODE_ENV !== "production") {
    //   middlewares.push(freeze);
}

// apply middlewares
let middleware = applyMiddleware(...middlewares);

// create store
const store = createStore(combineReducers({ reducers }), {}, middleware);

// export
export { store };