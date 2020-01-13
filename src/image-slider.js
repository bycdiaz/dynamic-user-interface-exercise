/* eslint-disable no-param-reassign */
import back from './images/back.png';
import next from './images/next.png';

// imageSlider([burger1, burger2, burger3], document.querySelector('#imgSlider'))

// const imageSlider = (imageArry, renderArea) => { }  --------> Final product

const imageSlider = (imageArray, renderArea) => {
  // Create arrows to later append
  const arrowLeft = document.createElement('img');
  arrowLeft.src = back;
  arrowLeft.classList.add('arrow');

  const arrowRight = document.createElement('img');
  arrowRight.src = next;
  arrowRight.classList.add('arrow');

  const createSliderArea = () => {
    renderArea.appendChild(arrowLeft);
    // append all image elements to renderArea to match what you [Carlos] have in HTML
    renderArea.appendChild(arrowRight);
  };

  const addSliderImages = () => {
    // for each image in array passed in
    //    create div
    //    append "slider-image-container" class to div
    //    create img
    //    append img to div
    //    append 'slider-image' class to img
    //    set img.src to image in array
    //    append div to renderArea

    const imageElements = renderArea.querySelectorAll('.slider-image');

    imageElements.forEach((element, index) => {
      element.src = imageArray[index];
    });
  };

  const slide = () => {
    const sliderImageContainers = renderArea.querySelectorAll('.slider-image-container');
    let sliderValue = 0;

    const move = (direction) => {
      sliderValue += direction;

      if (sliderValue < 0) {
        sliderValue = (sliderImageContainers.length - 1);
      } else if (sliderValue > (sliderImageContainers.length - 1)) {
        sliderValue = 0;
      }

      sliderImageContainers.forEach((element) => {
        element.style.display = 'none';
      });

      sliderImageContainers[sliderValue].style.display = 'block';
    };

    createSliderArea();
    arrowLeft.addEventListener('click', () => move(-1));
    arrowRight.addEventListener('click', () => move(1));

    return {};
  };

  addSliderImages();

  return {
    addSliderImages,
    slide,
  };
};

export { imageSlider };
