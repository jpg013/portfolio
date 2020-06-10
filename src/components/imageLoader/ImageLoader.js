import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const makeImageElement = imgSrc => {
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

const ImageLoader = ({ images, onLoad }) => {
  useEffect(() => {
    images.forEach(imgSrc => {
      const imgEl = makeImageElement(imgSrc);

      // Add Load Event listener
      imgEl.addEventListener('load', () => {
        // remove image from body
        document.body.removeChild(imgEl);
        onLoad();
      });
    });
  }, [images, onLoad]);

  return (<></>)
};

ImageLoader.propTypes = {
  images: PropTypes.array.isRequired,
  onLoad: PropTypes.func.isRequired,
}

ImageLoader.defaultProps = {
  onLoad: () => undefined, 
}

export default ImageLoader;