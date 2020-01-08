import './styles/reset.css';
import './styles/style.css';
import { dropDown } from './drop-down';
import { mobileMenu } from './mobile-menu';
import { imageSlider } from './image-slider';

const renderPage = () => {
  dropDown();
  mobileMenu();
  const createImageSlider = imageSlider();
  createImageSlider.slide();
};

renderPage();
