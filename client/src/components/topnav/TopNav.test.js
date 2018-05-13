import React from 'react';
import TopNav from './TopNav';
import { shallow, mount } from 'enzyme';
import BpkMenuIcon from 'bpk-component-icon/lg/menu';

describe('<TopNav />', () => {

  const component = shallow(<TopNav />);
  const wrapper = mount(<TopNav />);


  it('should render properly without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should contain menu icon', () => {
    expect(
      wrapper
        .find('.header')
        .contains(<BpkMenuIcon className='menu' />)
    ).toBeTruthy();
  });

});