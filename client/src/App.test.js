import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {

  const component = shallow(<App />);

  it('should render properly without crashing', () => {
    expect(component).toHaveLength(1);
  });

  // it('should fetch call fetchAPI properly upon mounting', () => {
  //   component.instance().fetchAPI = jest.fn();
  //   component.update();
  //   component.instance().componentDidMount();
  //   expect(component.instance().fetchAPI).toBeCalled();
  // });

  // it('should render a spinner while fetching is true', () => {

  // })

  describe('getCurrencySymbol', () => {

    it('should return currency symbol correctly', () => {
      component.instance().setState({
        Query: {
          Code: 'GBP'
        },
        Currencies: [{
          Currency: 'GBP',
          Symbol: '£'
        }]
      });
      expect(component.instance().getCurrencySymbol()).toEqual('£');
    });

    it('should be called upon response is fetch', () => {
      component.instance().getCurrencySymbol = jest.fn();
      component.update();
      component.instance().componentDidMount();
    })

  });

});