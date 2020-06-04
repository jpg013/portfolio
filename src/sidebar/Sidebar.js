import React from 'react';
import './Sidebar.css';
import portraitSrc from 'appImages/portrait1920.jpg';
import SidebarNav from './SidebarNav';
import { SocialIcons } from 'appComponents';

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <div class="sidebar-inner">
        <div class="sidebar-avatar">
          <div class="sidebar-avatar-portrait">
            <a href="/">
              <img src={ portraitSrc } alt="portrait" />
            </a>
          </div>
          <div class="sidebar-avatar-details">
            <h1>Justin Paul Graber</h1>
            <h2>full-stack software engineer</h2>
          </div>
        </div>
        
        <SidebarNav />

        <div class="sidebar-social">
          <div class="sidebar-social-title">get in touch</div>
          <SocialIcons />
        </div>
      </div>
    </aside>
  )
};

export default Sidebar;
