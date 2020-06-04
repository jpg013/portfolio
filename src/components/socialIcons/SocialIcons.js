import React from 'react';
import { 
  EmailIcon,
  LinkedInIcon,
  GithubIcon,
  TwitterIcon, 
} from 'appIcons';
import './SocialIcons.css';

const socialIcons = () => {
  return (
    <div className="social-icons">
      <div className="social-icon-block">
        <a target="_blank" rel="me noopener noreferrer" href="mailto:jpg013@gmail.com" title="mail: jpg013@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <div className="social-icon-block">
        <a target="_blank" rel="me noopener noreferrer" href="https://www.linkedin.com/in/justin-graber-610bb01a5/" title="linkedin: justin-graber">
          <LinkedInIcon />
        </a>
      </div>
      <div className="social-icon-block">
        <a target="_blank" rel="me noopener noreferrer" href="https://github.com/jpg013" title="github: justin-graber">
          <GithubIcon />
        </a>
      </div>
      <div className="social-icon-block">
        <a target="_blank" rel="me noopener noreferrer" href="https://twitter.com" title="twitter: justin-graber">
          <TwitterIcon />
        </a>
      </div>
    </div>
  )
};

export default socialIcons;