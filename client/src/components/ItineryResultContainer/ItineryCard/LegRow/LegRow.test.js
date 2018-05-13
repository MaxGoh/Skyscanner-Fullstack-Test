import React from 'react';
import LegRow from './LegRow';
import BpkText from 'bpk-component-text';
import { shallow } from 'enzyme';

describe('<LegRow />', () => {

  const minProps = {
    leg: {
      Arrival: '2018-05-22T09:40:00',
      Departure: '2018-05-22T08:20:00',
      DestinationStation: {
        Code: 'EDI'
      },
      OriginStation: {
        Code: 'LON'
      },
      Duration: 90,
      Stops: []
    }
  };
  const component = shallow(<LegRow {...minProps} />);

  it('should render properly without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should show destination code correctly', () => {
    expect(
      component
        .find('.display-code')
        .at(0)
        .contains(
          <BpkText className='display-code' tagName="p">
            EDI
          </BpkText>
        )
    );
  });

  it('should show arrival code correctly', () => {
    expect(
      component
        .find('.display-code')
        .at(1)
        .contains(
          <BpkText className='display-code' tagName="p">
            LON
          </BpkText>
        )
    );
  });

  it('should show departure code correctly', () => {
    expect(
      component
        .find(BpkText)
        .at(0)
        .contains(
          <BpkText tagName="p">
            09:40
          </BpkText>
        )
    );
  });

  it('should show arrival code correctly', () => {
    expect(
      component
        .find(BpkText)
        .at(3)
        .contains(
          <BpkText tagName="p">
            08:20
          </BpkText>
        )
    );
  });

  it('should show duration with proper format correctly', () => {
    expect(
      component
        .find('.flight-information__duration')
        .contains(
          <BpkText className='flight-information__duration' textStyle='sm'>
            1h 30
          </BpkText>
        )
    );
  });

  it('should show a green colored text Direct when stops.length is 0', () => {
    expect(
      component
        .find('.flight-information__duration')
        .contains(
          <BpkText className='flight-information__stop-direct' textStyle='sm'>
            Direct
          </BpkText>
        )
    );
  });

  it('should show a red colored text 2+ stops when stops.length > 0', () => {
    const component = shallow(<LegRow {...minProps} Stops={[1,2]} />);
    expect(
      component
        .find('.flight-information__duration')
        .contains(
          <BpkText className='flight-information__stop-indirect' textStyle='sm'>
            2+ stops
          </BpkText>
        )
    );
  });

});