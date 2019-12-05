import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import {store} from './app/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default); // eslint-disable-line global-require
    });
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
