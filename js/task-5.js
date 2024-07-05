const body = document.querySelector('body');
const changeColorBtnEL = document.querySelector('.change-color');
const spanColorEL = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtnEL.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  spanColorEL.textContent = randomHexColor;
});
