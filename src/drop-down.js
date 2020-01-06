const dropDown = () => {
  const navElements = document.querySelectorAll('.nav-item');

  navElements.forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
      const dropDownInfo = event.target.querySelector('.dropdown');

      if (dropDownInfo.style.display === 'none') {
        dropDownInfo.style.display = 'block';
      } else {
        dropDownInfo.style.display = 'none';
      }
    });

    element.addEventListener('mouseleave', (event) => {
      const dropDownInfo = event.target.querySelector('.dropdown');

      if (dropDownInfo.style.display === 'block') {
        dropDownInfo.style.display = 'none';
      } else {
        dropDownInfo.style.display = 'block';
      }
    });
  });
};

export { dropDown };
