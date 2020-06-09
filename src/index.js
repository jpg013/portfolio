import React from 'react';
import ReactDOM from 'react-dom';
// Import custom web components
import './web-components/TypingEffect';
import './web-components/BasicChip';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { ImageLoader, DotPulse } from 'appComponents';


const appImages = [
  'images/kansas_city.jpg',
  'images/portrait_1920x1920.jpg',
];

const renderLoading = () => {
  return (
    <DotPulse />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ImageLoader 
        images={ appImages } 
        renderLoading={ renderLoading }
        delay={ 2000 }
        >
        <App />
      </ImageLoader>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
