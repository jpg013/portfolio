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
    <nav className="side-nav">
      <ul>
        {
          navItems.map(curr => {
            return (
              <li key={ curr.name }>
                <NavLink to={ curr.route }>
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
