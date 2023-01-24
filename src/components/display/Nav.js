import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
export default function Nav() {
  return (
    <nav>
      <NavLink to="/173/54/54">Red</NavLink>
      <NavLink to="/54/173/84">Green</NavLink>
      <NavLink to="/54/94/173">Blue</NavLink>
    </nav>
  );
}
