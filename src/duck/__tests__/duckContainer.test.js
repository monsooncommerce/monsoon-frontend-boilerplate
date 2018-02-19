import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import createStore, { log } from '../test-store.js';
import DuckContainer from '../containers/DuckContainer';

const store = createStore();
const log = [];
const dispatch = args => {
  log2.push(args);
  store.despatch(args);
};

describe('The', () => {

  test('duck', async () => {
    store.subscribe(()=>{
      console.log('test!!!!', store.getState());
      console.log('yo', log);
      expect(log).toEqual(['hello']);
    });

    const wrapper = await mount(
      <Provider store={store} dispatch={dispatch}>
        <DuckContainer/>
      </Provider>
    );
  });




});

// This test needs to be fixed for full integration
