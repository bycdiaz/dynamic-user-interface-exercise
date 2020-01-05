const dropDown = () => {
  const infoTab = document.querySelector('#info');

  infoTab.addEventListener('click', () => {
    const infoDropdown = document.querySelector('.dropdown');

    if (infoDropdown.style.display === 'none') {
      infoDropdown.style.display = 'block';
    } else {
      infoDropdown.style.display = 'none';
    }
  });
};

export { dropDown };
