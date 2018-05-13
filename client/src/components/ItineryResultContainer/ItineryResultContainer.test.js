import React from 'react';
import ItineryResultContainer from './ItineryResultContainer';
import { shallow } from 'enzyme';

describe('<ItineryResultContainer />', () => {

  const minProps = {
    'itineries': [{}, {}, {}],
    'currencySymbol': '£'
  };
  const component = shallow(<ItineryResultContainer {...minProps} />);

  it('should render properly without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should render 3 ItineryCard', () => {
    expect(component.find('.itinery-card-wrapper')).toHaveLength(3);
  });

});
