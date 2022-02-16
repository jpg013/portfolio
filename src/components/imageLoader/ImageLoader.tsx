import { useEffect } from 'react';

type ComponentProps = {
  images: string[];
  onLoad: () => void;
}

const makeImageElement = (imgSrc: string) => {
  const img = document.createElement('img');
  
  img.setAttribute('src', imgSrc);
  img.setAttribute('height', '0');
  img.setAttribute('width', '0');
  img.style.visibility = 'hidden';
  img.style.height = '0';
  img.style.width = '0';
  document.body.appendChild(img);
  
  return img
}

const ImageLoader = ({ images, onLoad }: ComponentProps) => {
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


export default ImageLoader;