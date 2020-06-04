import React from 'react';
import './SidebarNav.css';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    route: '/portfolio',
    name: 'portfolio'
  },
  {
    route: '/skills-and-offer',
    name: 'my offer'
  },
  {
    route: '/cv',
    name: 'my cv'
  },
]

const SidebarNav = () => {
  return (
    <nav class="side-nav">
      <ul>
        {
          navItems.map(curr => {
            return (
              <li>
                <NavLink to={ curr.route } activeStyle="selected">
                  { curr.name }
                  <i></i>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      <ul>
        <li>
          <NavLink to="contact-me" activeStyle="selected">contact me<i></i></NavLink>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@justin.graber">personal blog<i></i></a>
        </li>
      </ul> 
    </nav>
  )
};

export default SidebarNav;
