import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import reducers from '../reducers/index'


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
const initialState = {
    auth: {
        isAuthenticated: false,
        user: {},
    }
}

/**
 * 
 * @param state current state of the application.
 * saves the current state of the application to localstorage for preventing state to be lost.
 */

function saveStateTOLocalStorage(state) {
    const serilizedState = JSON.stringify(state)
    localStorage.setItem('state', serilizedState)
}

function loadFromLocalStorage() {
    const serilizedState = localStorage.getItem('state');
    if(serilizedState === null) return undefined
    return JSON.parse(serilizedState)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();
// create store
const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(
        applyMiddleware(...middlewares),
    ));

    store.subscribe(() => {
        saveStateTOLocalStorage(store.getState())
    });
// export
export { store };