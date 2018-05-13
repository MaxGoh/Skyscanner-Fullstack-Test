import React from 'react';
import ControlBar from './ControlBar';
import { shallow } from 'enzyme';

describe('<ControlBar />', () => {

  const component = shallow(<ControlBar />);

  it('should render properly without crashing', () => {
    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  it('should have the text Filter', () => {
    expect(
      component
      .find('BpkGridColumn')
      .at(0)
      .contains('Filter')
    ).toBeTruthy();
  });

  it('should have the text Sort', () => {
    expect(
      component
      .find('BpkGridColumn')
      .at(1)
      .contains('Sort')
    ).toBeTruthy();
  });

  it('should have the text Price Alerts', () => {
    expect(
      component
      .find('.control-bar__price-alert')
      .contains(
       'Price alerts'
      )
    ).toBeTruthy();
  });

});
