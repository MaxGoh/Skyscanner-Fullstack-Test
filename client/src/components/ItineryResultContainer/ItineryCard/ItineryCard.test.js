import React from 'react';
import ItineryCard from './ItineryCard';
import { shallow } from 'enzyme';

describe('<ItineryCard />', () => {

  const minProps = {
    itinery: {
      OutboundLegId: "11235-1705301925--32480-0-13554-1705302055",
      InboundLegId: "13554-1706020700--32480-0-11235-1706020820",
      PricingOptions:[
        {
          Agents: [
            {
              Name: 'RyanAir'
            }
          ],
          QuoteAgeInMinutes: 0,
          Price: 83.41,
          DeeplinkUrl: "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfe1..."
        },

      ],
      "BookingDetailsLink":{
        "Uri":"/apiservices/pricing/v1.0/ab5b948d616e41fb954a4a2f6b8dde1a_ecilpojl_7CAAD17D0CFC34BFDE68DEBFDFD548C7/booking",
        "Body":"OutboundLegId=11235-1705301925--32480-0-13554-1705302055&InboundLegId=13554-1706020700--32480-0-11235-1706020820",
        "Method":"PUT"
      }
    },
    currencySymbol: '£'
  }
  const component = shallow(<ItineryCard {...minProps} />)

  it('should render properly without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should render 2 LegRow', () => {
    expect(component.find('LegRow')).toHaveLength(2);
  });

  it('should render 1 SelectRow component', () => {
    expect(component.find('SelectRow')).toHaveLength(1);
    expect(component.find('SelectRow').props()).toEqual({
      agentName: 'RyanAir',
      currencySymbol: '£',
      price: 83.41
    });

  });

});