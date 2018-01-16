import { saga as duckSaga } from './duck';
import { fork } from 'redux-saga/effects';

function* rootSaga () {
  yield [
    fork(duckSaga),
  ];
}

export default rootSaga;
