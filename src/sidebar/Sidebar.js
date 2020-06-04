import React from 'react';
import './Sidebar.css';
import portraitSrc from 'appImages/portrait1920.jpg';
import SidebarNav from './SidebarNav';
import { SocialIcons } from 'appComponents';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-avatar">
          <div className="sidebar-avatar-portrait">
            <a href="/">
              <img src={ portraitSrc } alt="portrait" />
            </a>
          </div>
          <div className="sidebar-avatar-details">
            <h1>Justin Paul Graber</h1>
            <h2>full-stack software engineer</h2>
          </div>
        </div>
        
        <SidebarNav />

        <div className="sidebar-social">
          <div className="sidebar-social-title">get in touch</div>
          <SocialIcons />
        </div>
      </div>
    </aside>
  )
};

export default Sidebar;
