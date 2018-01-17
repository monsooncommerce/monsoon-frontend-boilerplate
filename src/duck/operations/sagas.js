import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import api from './../../api';

const api = () => () => {
  return {
    body: []
  };
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchUser(action) {
   try {
     // console.log(api)
      yield call(api('fake_data'), {txnId: '3'});

      yield put({type: "USER_FETCH_SUCCEEDED", user: user.body});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
