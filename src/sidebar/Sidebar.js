import React from 'react';
import './Sidebar.css';
import portraitSrc from '/kansas_city.jpg';

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
        <nav class="main-nav">
          <ul>
            <li>
              <a class="<%= currentRoute === 'portfolio' ? 'current' : '' %>" href="/portfolio">portfolio<i></i></a>
            </li>
            <li>
              <a class="<%= currentRoute === 'skills-and-offer' ? 'current' : '' %>" href="/skills-and-offer">my offer<i></i></a>
            </li>
            <li>
              <a href="/cv" target="_blank">my cv<i></i></a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="<%= currentRoute === 'contact-me' ? 'current' : '' %>" href="/contact-me">contact me<i></i></a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@justin.graber">personal blog<i></i></a>
            </li>
          </ul>
        </nav>
        <div class="social-block">
          <div class="social-block-title">get in touch</div>
          <div class="social-icons">
            <div class="social-icon-block">
              <a rel="me noopener noreferrer" target="_blank" href="mailto:jpg013@gmail.com" title="mail: jpg013@gmail.com">
                {/* <%- include('./icons/email') -%> */}
              </a>
            </div>
            <div class="social-icon-block">
              <a rel="me noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/justin-graber-610bb01a5/" title="linkedin: justin-graber">
                {/* <%- include('./icons/linkedin') -%> */}
              </a>
            </div>
            <div class="social-icon-block">
              <a rel="me noopener noreferrer" target="_blank" href="https://github.com/jpg013" title="github: justin-graber">
                {/* <%- include('./icons/github') -%> */}
              </a>
            </div>
            <div class="social-icon-block">
              <a rel="me noopener noreferrer" target="_blank" href="/" title="twitter: justin-graber">
                {/* <%- include('./icons/twitter') -%> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
};

export default Sidebar;
