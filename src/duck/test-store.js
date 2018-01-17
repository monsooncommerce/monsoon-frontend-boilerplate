import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './operations/reducer';
import rootSaga from './operations/sagas';

const makeStore = () => {
  // more middleware will go here
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    {user: {loading: false}},
    applyMiddleware(logger, sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default makeStore;
