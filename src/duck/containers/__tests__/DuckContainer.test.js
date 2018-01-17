import React from 'react';
import { shallow, mount } from 'enzyme';

import { DuckContainer } from '../DuckContainer';

describe('The', () => {
  test('duck', () => {
    const wrapper = mount(<DuckContainer dispatch={jest.fn()} users={{loading: false, users: []}}/>);

    const thing = wrapper.find('div');
    expect(wrapper.find('div')).toHaveLength(2);
  });
});
