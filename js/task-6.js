const refs = {
  inputTextEl: document.querySelector('#controls input'),
  createBtnEl: document.querySelector('[data-create]'),
  destroyBtnEl: document.querySelector('[data-destroy]'),
  boxesContainerEl: document.querySelector('#boxes'),
};

refs.createBtnEl.addEventListener('click', createBtn);
refs.destroyBtnEl.addEventListener('click', destroyBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBtn() {
  const amount = refs.inputTextEl.value.trim();
  if (amount >= 0 && amount <= 100) {
    createBoxes(amount);
    refs.inputTextEl.value = '';
  } else {
    alert('Введено не вірне значення. Введіть значення від 1 до 100!');
  }
}

function destroyBtn() {
  refs.boxesContainerEl.innerHTML = '';
}

function createBoxes(amount) {
  destroyBtn();
  let box = '';
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    box += `<div style="width:${boxSize}px; height:${boxSize}px; background-color:${getRandomHexColor()}"></div>`;
    boxSize += 10;
    console.log(box);
  }
  refs.boxesContainerEl.innerHTML = box;
}
