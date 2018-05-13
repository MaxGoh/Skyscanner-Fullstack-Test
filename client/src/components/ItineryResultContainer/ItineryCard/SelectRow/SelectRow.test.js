import React from 'react';
import SelectRow from './SelectRow';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { shallow } from 'enzyme';

describe('<SelectRow />', () => {

  const minProps = {
    price: 66,
    currencySymbol: '£',
    agentName: 'Ryanair'
  };
  const component = shallow(<SelectRow {...minProps} />);

  it('should render properly without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should render currency symbol and price correctly', () => {
    expect(
      component
        .find(BpkText)
        .at(0)
        .contains(<BpkText textStyle="lg">£66</BpkText>)
    ).toBeTruthy();
  });

  it('should render Agent Name correctly', () => {
    expect(
      component
        .find('.agent-name')
        .contains('Ryanair')
    ).toBeTruthy();
  });

  it('should render a BpkButton with the text Select correctly', () => {
    expect(
      component
        .find('.select-button-container')
        .contains(<BpkButton>Select</BpkButton>)
    ).toBeTruthy();
  });

});