import React, { useState, useEffect } from 'react';

const ImageLoader = ({ images, children, renderLoading, delay=0  }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const makeImgEl = src => {
    const img = document.createElement('img');
    
    img.setAttribute('src', src);
    img.setAttribute('height', 0);
    img.setAttribute('width', 0);
    img.style.visibility = 'hidden';
    img.style.height = 0;
    img.style.width = 0;
    document.body.appendChild(img);
    
    return img
  }

  useEffect(() => {
    let counter = 0;

    images.forEach(img => {
      counter++;
      const imgEl = makeImgEl(img);

      imgEl.addEventListener('load', () => {
        document.body.removeChild(imgEl);
        counter--;

        if (counter === 0) {
          setTimeout(() => {
            setIsLoaded(true);
          }, delay)
        }
      });
    });
  }, [images, delay]);

  if (!isLoaded) {
    return renderLoading();
  }

  return (
    <>
      { children }
    </>
  )
};

export default ImageLoader;