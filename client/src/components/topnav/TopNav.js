import React from 'react';
import './TopNav.scss';
import logo from '../../logo.svg';
import BpkMenuIcon from 'bpk-component-icon/lg/menu';

const TopNav = () => (
  <header className='header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <img className='logo' alt="Skyscanner" src={logo}/>
    </a>
    <BpkMenuIcon className='menu' />
  </header>
);

export default TopNav;
