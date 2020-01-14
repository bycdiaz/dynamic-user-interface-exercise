import './styles/reset.css';
import './styles/style.css';
import { dropDown } from './drop-down';
import { mobileMenu } from './mobile-menu';
import { imageSlider } from './image-slider';
import burger1 from './images/burger1.jpg';
import burger2 from './images/burger2.jpg';
import burger3 from './images/burger3.jpg';
import burger4 from './images/burger4.jpg';
import burger5 from './images/burger5.jpg';

const renderPage = () => {
  // dropDown();
  // mobileMenu();
  imageSlider([burger1, burger2, burger3, burger4, burger5], document.querySelector('.image-slider'));
};

renderPage();
