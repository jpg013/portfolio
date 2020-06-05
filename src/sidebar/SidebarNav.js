import React from 'react';
import './SidebarNav.css';
import { NavLink } from 'react-router-dom';

const SidebarNav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <NavLink to="/portfolio">
            portfolio
            <i></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills-and-offer">
            my offer
            <i></i>
          </NavLink>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="http://localhost:3000/cv">my cv<i></i></a>
          <i></i>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="contact-me">contact me<i></i></NavLink>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@justin.graber">personal blog<i></i></a>
        </li>
      </ul> 
    </nav>
  )
};

export default SidebarNav;
