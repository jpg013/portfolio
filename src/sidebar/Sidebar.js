import React, { useState } from 'react';
import cx from 'classnames';
import './Sidebar.css';
import { SocialIcons, Avatar } from 'appComponents';
import { MenuIcon } from 'appIcons';
import { Navigation } from '../components';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const renderMenuBtn = () => {
    return (
      <button className="nav-menu-button" onClick={ () => setExpanded(!expanded)}>
        <MenuIcon />
      </button>
    );
  }
  
  const cns = cx('sidebar', {
    'sidebar-expanded': expanded,
  });

  return (
    <aside className={ cns }>
      <div className="sidebar-inner">
        <Avatar />

        { renderMenuBtn() }

        <div className="sidebar-title">
          <h1>Justin Paul Graber</h1>
            <h2>full-stack software engineer</h2>
        </div>

        <div className="nav-container">
          <Navigation />
        </div>
        
        <div className="nav-social">
          <span className="label">get in touch</span>
          <SocialIcons />
        </div>
      </div>
    </aside>
  )
};

export default Sidebar;
