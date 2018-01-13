import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer, { saga as duckSaga } from './duck';

const makeStore = () => {
  // more middleware will go here
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(duckSaga);

  return store;
};

export default makeStore;
