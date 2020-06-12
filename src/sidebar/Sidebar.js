import React, { useState } from 'react';
import cx from 'classnames';
import './Sidebar.css';
import { SocialIcons, Avatar, MainNavigation } from 'appComponents';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const cns = cx('sidebar', {
    'sidebar-expanded': expanded,
  });

  return (
    <aside className={ cns }>
      <div className="sidebar-inner">
        <div className="sidebar-avatar">
          <Avatar />
        </div>
        
        <div className="sidebar-nav">
          <MainNavigation 
            onClick={ () => setExpanded(!expanded) } 
            />
        </div>
        
        <div className="sidebar-social">
          <span className="label">get in touch</span>
          <SocialIcons />
        </div>
      </div>
    </aside>
  )
};

export default Sidebar;
