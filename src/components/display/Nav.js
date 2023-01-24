import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
export default function Nav() {
  return (
    <nav>
      <NavLink to="/255/204/204">Red</NavLink>
      <NavLink to="/204/255/204">Green</NavLink>
      <NavLink to="/204/229/255">Blue</NavLink>
    </nav>
  );
}
