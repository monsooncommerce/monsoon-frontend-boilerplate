import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './operations/reducer';
import rootSaga from './operations/sagas';

export const log = [];

const testMiddleware = store => next => action => {
  log.push('hello');
  next(action);
};

const makeStore = () => {
  // more middleware will go here
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    {users: {loading: false, users: []}},
    applyMiddleware(logger, testMiddleware, sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};


export default makeStore;
