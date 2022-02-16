import { Link } from 'react-router-dom';
import './Avatar.css'

const imgURL = `${process.env.PUBLIC_URL}images/portrait_1920x1920.jpg`;

const Avatar = () => {
  return (
    <div className="avatar-block">
      <div className="avatar-portrait">
        <Link to="/">
          <img src={ imgURL } alt="portrait" />
        </Link>
      </div>
      <div className="avatar-title">
        <h1>Justin Paul Graber</h1>
        <h2>senior software engineer</h2>
      </div>
    </div>
  );
}

export default Avatar;