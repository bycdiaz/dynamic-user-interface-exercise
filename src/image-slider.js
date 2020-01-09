import burger1 from './images/burger1.jpg';
import burger2 from './images/burger2.jpg';
import burger3 from './images/burger3.jpg';
import burger4 from './images/burger4.jpg';
import burger5 from './images/burger5.jpg';
import back from './images/back.png';
import next from './images/next.png';

const imageSlider = () => {
  const burgers = [burger1, burger2, burger3, burger4, burger5];
  const arrows = [back, next];

  const addSliderImages = () => {
    const imageElements = document.querySelectorAll('.slider-image');

    imageElements.forEach((element, index) => {
      element.src = burgers[index];
    });
  };

  const addArrows = () => {
    const arrowElements = document.querySelectorAll('.arrow');

    arrowElements.forEach((element, index) => {
      element.src = arrows[index];
    });
  };

  const slide = () => {
    const sliderImageContainers = document.querySelectorAll('.slider-image-container');
    let sliderValue = 0;

    const left = () => {
      const leftArrow = document.querySelector('#slider-left');

      leftArrow.addEventListener('click', () => {
        sliderValue -= 1;
        console.log(sliderValue % sliderImageContainers.length);
        sliderImageContainers.forEach((element) => {
          element.style.display = 'none';
        });
        sliderImageContainers[sliderValue].style.display = 'block';
      });
    };

    const right = () => {
      const rightArrow = document.querySelector('#slider-right');

      rightArrow.addEventListener('click', () => {
        sliderValue += 1;
        console.log(sliderValue % sliderImageContainers.length);
        sliderImageContainers.forEach((element) => {
          element.style.display = 'none';
        });
        sliderImageContainers[sliderValue].style.display = 'block';
      });
    };

    left();
    right();

    return {
      left,
      right,
    };
  };

  addSliderImages();
  addArrows();
  slide();

  return {
    addSliderImages,
    addArrows,
    slide,
  };
};

export { imageSlider };
