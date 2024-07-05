const inputValueEl = document.querySelector('#name-input');

const greetingNameEl = document.querySelector('#name-output');

inputValueEl.addEventListener('input', e => {
  const valueName = inputValueEl.value.trim();
  greetingNameEl.textContent = valueName || 'Anonymous';
});
