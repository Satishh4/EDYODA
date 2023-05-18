import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='left-nav'>
        <span className='title-name'>EDYODA</span>
        <p className='nav-title'>Courses</p>
        <p className='nav-title'>Programs</p>
      </div>

      <div className='right-nav'>
      <p className='nav-title'>Log in</p>  
      <button className='join-btn'>JOIN NOW</button>
      </div>  
    </nav>
  );
};

export default Navbar;
