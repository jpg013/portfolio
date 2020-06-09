import React from 'react';
import PropTypes from 'prop-types';

class ImageLoader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.array.isRequired,
    renderLoading: PropTypes.func.isRequired,
  } 

  static defaultProps = {
    renderLoading: () => null,
  }

  state = {
    isLoaded: false,
  }

  makeImageElement(imgSrc) {
    const img = document.createElement('img');
    
    img.setAttribute('src', imgSrc);
    img.setAttribute('height', 0);
    img.setAttribute('width', 0);
    img.style.visibility = 'hidden';
    img.style.height = 0;
    img.style.width = 0;
    document.body.appendChild(img);
    
    return img
  }

  componentDidMount() {
    let counter = this.props.images.length;
    
    this.props.images.forEach(img => {
      const imgEl = this.makeImageElement(img);

      // Add Load Event listener
      imgEl.addEventListener('load', () => {
        document.body.removeChild(imgEl);
        // Decrement the counter
        counter--;

        if (counter === 0) {
          this.setState(() => ({
            isLoaded: true,
          }))
        }
      });
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return this.props.renderLoading();
    }

    return (
      <>
        { this.props.children }
      </>
    )
  }
}

export default ImageLoader;