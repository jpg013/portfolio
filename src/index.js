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

class AppBoot extends React.PureComponent {
  constructor(props) {
    super(props);
    this.initAt = Date.now();
    this.state = {
      awaitingImages: AppBoot.imagesToLoad.length,
      isReady: false,
    }
  }

  // Images to be loaded before the app boots
  static imagesToLoad = [
    'images/kansas_city.jpg',
    'images/portrait_1920x1920.jpg',
  ]

  static minLoadingTime = 1000;

  getRemainingTime() {
    const elapsed = Date.now() - this.initAt;
    const remaining = AppBoot.minLoadingTime - elapsed;
    return remaining < 0 ? 0 : remaining;
  }

  componentDidUpdate() {
    if (this.state.awaitingImages === 0 && !this.state.isReady) {
      setTimeout(() => {
        this.setState(prevState => ({
          isReady: true,
        }))
      }, this.getRemainingTime())
    }
  }

  onLoadImage = () => {
    this.setState(prevState => ({
      awaitingImages: prevState.awaitingImages - 1,
    }));
  }

  render() {
    if (!this.state.isReady) {
      return (
        <div className="app-loader">
          <DotPulse />
          <ImageLoader 
            images={ AppBoot.imagesToLoad } 
            onLoad={ this.onLoadImage }
            />
        </div>
      )
    }
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <AppBoot />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
