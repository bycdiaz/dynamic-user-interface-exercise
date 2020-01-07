import home from './images/home.png';
import info from './images/info.png';
import email from './images/email.png';
import hamburger from './images/hamburger.png';

const mobileMenu = () => {
  const imageElements = document.querySelectorAll('.image');
  const images = [home, info, email];

  const navHamburger = () => {
    const hamburgerImage = document.querySelector('.hamburger');

    const addImage = () => {
      hamburgerImage.src = hamburger;
    };

    const addEvent = () => {
      hamburgerImage.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        if (menu.style.display === 'block') {
          menu.style.display = 'none';
        } else {
          menu.style.display = 'block';
        }
      });
    };

    addImage();
    addEvent();
  };

  const addNavImages = () => {
    imageElements.forEach((element, index) => {
      element.src = images[index];
    });
  };

  navHamburger();
  addNavImages();

  return {
    navHamburger,
    addNavImages,
  };
};

export { mobileMenu };
