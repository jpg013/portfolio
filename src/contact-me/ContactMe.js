import React from 'react';
import { 
  EmailIcon,
  LinkedInIcon,
  GithubIcon,
} from 'appIcons';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="board">
      <div class="board-title">
        <h1>Contact Me</h1>
      </div>

      <div class="board-description">
        <p>I'm always open to ideas, opportunites and collaboration! Reach out to me and I'll get back to you in a timely manner.</p>
      </div>

      <div class="contact-me">
        <a target="_blank" rel="me noopener noreferrer" href="mailto:jpg013@gmail.com" title="mail: jpg013@gmail.com" class="contact-me-item">
          <div class="icon email">
            <EmailIcon />
          </div>
          <span>jpg013@gmail.com</span>
        </a>

        <a class="contact-me-item" target="_blank" rel="me noopener noreferrer" href="https://www.linkedin.com/in/justin-graber-610bb01a5/" title="linkedin: justin-graber">
          <div class="icon linkedin">
            <LinkedInIcon />
          </div>
          <span>Justin Graber</span>
        </a>

        <a class="contact-me-item" target="_blank" rel="me noopener noreferrer" href="https://github.com/jpg013" title="github: justin-graber">
          <div class="icon linkedin">
            <GithubIcon />
          </div>
          <span>jpg013</span>
        </a>
      </div>
    </div>
  )
}

export default ContactMe;