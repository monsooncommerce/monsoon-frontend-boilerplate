const CHOOSE_COLOR = 'CHOOSE_COLOR';
const CHANGE_UI = 'CHANGE_UI';
import { take, put, yeild, call, takeLatest } from 'redux-saga/effects';
import deepEqual from 'deep-equal';

import saga, {fetchUser} from '../sagas';

const api = () => () => {
  return {
    body: []
  };
};

it('root', () => {
  const gen = saga();
  expect(gen.next().value).toEqual(takeLatest("USER_FETCH_REQUESTED", fetchUser));
});

it('fetchUser', () => {
  const gen = fetchUser();
  console.log(deepEqual( call(api('fake_data'), {id: 3}), call(api('fake_data'), {id: 3})) );
  console.log(deepEqual( takeLatest({id: 3}), takeLatest({id: 3})) );
  console.log(call(api('fake_data')));
  // expect( call(api('foo'), {h: 3}) ).toEqual( call(api('foo'), {h: 3}) )
});
