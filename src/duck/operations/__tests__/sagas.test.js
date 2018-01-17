import api from './../../../api';

import { take, put, yeild, call, takeLatest } from 'redux-saga/effects';
import deepEqual from 'deep-equal';

import saga, {fetchUser} from '../sagas';


it('root', () => {
  const gen = saga();
  expect(gen.next().value).toEqual(takeLatest("USER_FETCH_REQUESTED", fetchUser));
});

const func = ()=>({});

it('fetchUser', () => {
  const gen = fetchUser();
  console.log(deepEqual( gen.next().value, call(api, {key: 'whu', params: 'who'})));
  // console.log(gen.next().value, call(api('fake_data'), {txnId: '3'}));
  console.log(deepEqual( call(func, {id: 3}), call(func, {id: 3}) ));
  // console.log(call(api('fake_data')));
  // expect( call(api('foo'), {h: 3}) ).toEqual( call(api('foo'), {h: 3}) )
});
