const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', evt => {
  evt.preventDefault();
  const email = loginFormEl.elements.email.value.trim();
  const password = loginFormEl.elements.password.value.trim();

  if (email && password) {
    const formData = { email, password };
    console.log(formData);
    loginFormEl.reset();
    return;
  }
  alert('All form fields must be filled in');
});
