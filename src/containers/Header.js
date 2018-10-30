import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div >
    <nav className="navigation">
      
      <NavLink exact to="/">Home</NavLink >
      <NavLink exact to="/about">About</NavLink >
      <NavLink exact to="/dashboard">Dashboard</NavLink >
    </nav>
  </div>
);


export default Header;
