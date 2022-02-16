import React from 'react';
import './MainNavigation.css';
import { NavLink } from 'react-router-dom';
import { MenuIcon } from '../../icons';

type DataProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavToggleButton = ({ onClick }: DataProps) => {
  return (
    <button className="nav-menu-button" onClick={ onClick }>
      <MenuIcon />
    </button>
  );
}

const MainNavigation = ({ onClick }: DataProps) => {
  return (
    <nav className="main-nav">
      <NavToggleButton onClick={ onClick } />
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
          <a
            rel="noopener noreferrer" 
            target="_blank" 
            href={ `${window.location.origin}/cv` }
            >my cv<i></i>
          </a>
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
  );
};


export default MainNavigation;