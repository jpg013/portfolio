import { 
  EmailIcon,
  LinkedInIcon,
  GithubIcon,
} from '../../icons';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="board">
      <div className="board-title">
        <h1>Contact Me</h1>
      </div>

      <div className="board-description">
        <p>I'm always open to ideas, opportunites and collaboration! Reach out to me and I'll get back to you in a timely manner.</p>
      </div>

      <div className="contact-me">
        <a target="_blank" rel="me noopener noreferrer" href="mailto:4graber@protonmail.com" title="mail: 4graber@protonmail.com" className="contact-me-item">
          <div className="icon email">
            <EmailIcon />
          </div>
          <span>4graber@protonmail.com</span>
        </a>

        <a className="contact-me-item" target="_blank" rel="me noopener noreferrer" href="https://www.linkedin.com/in/justin-graber-610bb01a5/" title="linkedin: justin-graber">
          <div className="icon linkedin">
            <LinkedInIcon />
          </div>
          <span>Justin Graber</span>
        </a>

        <a className="contact-me-item" target="_blank" rel="me noopener noreferrer" href="https://github.com/jpg013" title="github: justin-graber">
          <div className="icon linkedin">
            <GithubIcon />
          </div>
          <span>jpg013</span>
        </a>
      </div>
    </div>
  )
}

export default ContactMe;