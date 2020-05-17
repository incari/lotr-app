import React from 'react';
import logo from '../images/logo-lotr.png';
import './Header.css';

export const Header = () => {
  return (
    <div className='header'>
      <a href='/#'>
        <img src={logo} alt='' />
      </a>
    </div>
  );
};
