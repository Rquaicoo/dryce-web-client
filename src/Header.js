import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div>
      <div className='row'>
        <h1>Dryce</h1>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/"> About </Link>
          <Link to="/"> Contact US </Link>
          <Link to="/"> services </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header