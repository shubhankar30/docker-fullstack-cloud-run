import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { reactReduxFirebase } from 'react-redux-firebase';
import config from '../config';
import reducers from './reducers';
import sagas from './sagas';

// import firebase from '../firebase';

const configureSaga = s => function* configureSagaGenerator() {
  yield all(s.map(saga => fork(saga)));
};

const middleware = [];

// Create and add Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

// Dev tools like redux for chrome
// Only run devtools in development mode.
let devTools = f => f;
if (config.STAGE === 'development') {
  // eslint-disable-next-line no-undef,no-underscore-dangle
  if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
    // eslint-disable-next-line no-undef,no-underscore-dangle
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    // TODO: Move to central logging
    // eslint-disable-next-line no-console
    console.log('react and redux dev-tools is: ON');
  }
}

const enhancer = compose(
  applyMiddleware(...middleware),
  devTools,
);

// https://medium.com/better-programming/https-medium-com-clairechabas-auth-with-firebase-for-react-redux-apps-from-0-to-1-104e7343521b
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase),
// )(
//   createStore,
// );

export default () => {
  const store = createStore(
    combineReducers(reducers),
    enhancer,
  );

  // Apply sagas
  sagaMiddleware.run(configureSaga(sagas));

  return store;
};
