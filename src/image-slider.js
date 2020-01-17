/* eslint-disable no-param-reassign */
import back from './images/back.png';
import next from './images/next.png';

const imageSlider = (imageArray, renderArea) => {
  const imageDivs = [];

  const arrowLeft = document.createElement('img');
  arrowLeft.src = back;
  arrowLeft.id = 'arrow-left';
  arrowLeft.classList.add('arrow');

  const arrowRight = document.createElement('img');
  arrowRight.src = next;
  arrowRight.id = 'arrow-right';
  arrowRight.classList.add('arrow');

  const createSliderArea = () => {
    imageDivs.forEach((image) => {
      renderArea.appendChild(image);
    });
    renderArea.appendChild(arrowLeft);
    renderArea.appendChild(arrowRight);
  };

  const addSliderImages = () => {
    imageArray.forEach((image, index) => {
      if (index === 0) {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'slider-image-container';
        imageDiv.style.display = 'block';

        const sliderImage = document.createElement('img');
        imageDiv.appendChild(sliderImage);
        sliderImage.className = 'slider-image';
        sliderImage.src = image;

        imageDivs.push(imageDiv);
      } else {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'slider-image-container';
        imageDiv.style.display = 'none';

        const sliderImage = document.createElement('img');
        imageDiv.appendChild(sliderImage);
        sliderImage.className = 'slider-image';
        sliderImage.src = image;

        imageDivs.push(imageDiv);
      }
    });
  };

  const slide = () => {
    let sliderValue = 0;

    const move = (direction) => {
      sliderValue += direction;

      if (sliderValue < 0) {
        sliderValue = (imageDivs.length - 1);
      } else if (sliderValue > (imageDivs.length - 1)) {
        sliderValue = 0;
      }

      imageDivs.forEach((element) => {
        element.style.display = 'none';
      });

      imageDivs[sliderValue].style.display = 'block';
    };

    arrowLeft.addEventListener('click', () => move(-1));
    arrowRight.addEventListener('click', () => move(1));

    return {};
  };

  addSliderImages();
  createSliderArea();
  slide();

  return {
    addSliderImages,
    slide,
  };
};

export { imageSlider };
