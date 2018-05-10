import React from 'react';
import ControlBar from './ControlBar.js';
import { shallow } from 'enzyme';

test('1 equals 1', () => {
  const component = shallow(<ControlBar />);
  expect(component).toHaveLength(1);
});
