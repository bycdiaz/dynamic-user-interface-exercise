import home from './images/home.png';
import info from './images/info.png';
import email from './images/email.png';

const mobileMenu = () => {
  const imageElements = document.querySelectorAll('.image');
  const images = [home, info, email];

  const addImages = () => {
    for (let index = 0; index < imageElements.length; index += 1) {
      imageElements[index].src = images[index];
    }
  };

  return {
    addImages,
  };
};

export { mobileMenu };
