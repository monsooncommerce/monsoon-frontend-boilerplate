import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import createStore from '../test-store.js';
import DuckContainer from '../containers/DuckContainer';

const store = createStore();
store.subscribe(()=>{
  console.log('test', store.getState());
});

xdescribe('The', () => {
  test('duck', () => {
    const wrapper = mount(
      <Provider store={store}>
        <DuckContainer/>
      </Provider>
    );
  });
});
