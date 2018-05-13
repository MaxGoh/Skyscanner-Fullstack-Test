import React from 'react';
import QueryHeader from './QueryHeader';
import BpkLongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { shallow, mount } from 'enzyme';
import BpkText from 'bpk-component-text';


describe('<QueryHeader />', () => {

  const minProps = {
    numOfTravellers: 2,
    cabinClass: 'economy',
    originPlace: 'LON',
    destinationPlace: 'EDI'
  };
  const component = shallow(<QueryHeader {...minProps} />);

  it('should render properly without crashing', () => {
    expect(component).toHaveLength(1);
  });

  describe('Arrival and Destination Code', () => {
    it('should have the correct props', () => {
      expect(
        component
          .find(BpkText)
          .at(0)
          .prop('textStyle')
      ).toBe('xxl');
    });

    it('should show the arrival code, departure code and arrow properly', () => {
        expect(
          component
            .find(BpkText)
            .at(0)
            .contains(
              <BpkText textStyle="xxl">
              LON <BpkLongArrowRightIcon className='icon__long-right-arrow'/> EDI
              </BpkText>
            )
        ).toBeTruthy();
      });
  });

  describe('Number of Travellers & Cabin Class', () => {

    it('should have the correct props', () => {
      expect(
        component
          .find(BpkText)
          .at(1)
          .prop('tagName')
      ).toBe('p');
    });

    it('should render the correct number of travellers and cabin class', () => {
      expect(
        component
          .find(BpkText)
          .at(1)
          .contains(
            <BpkText tagName='p'>
              2 travellers, economy
            </BpkText>
          )
      ).toBeTruthy();
    })
  });
})
