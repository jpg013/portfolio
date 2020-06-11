import React from 'react';
import { Link } from 'react-router-dom';
import './Avatar.css'

const imgURL = `${process.env.PUBLIC_URL}images/portrait_1920x1920.jpg`;

export default () => {
  return (
    <div className="avatar">
      <Link to="/">
        <img src={ imgURL } alt="portrait" />
      </Link>
    </div>
  )
}