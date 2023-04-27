console.log("from passwordVisibility file");

function togglePasswordVisibility(pwInput, notVisibleIcon, visibleIcon) {
  if (pwInput.type === 'password') {
    pwInput.type = 'text';
    visibleIcon.classList.remove('hide');
    notVisibleIcon.classList.add('hide');
  } else {
    pwInput.type = 'password';
    visibleIcon.classList.add('hide');
    notVisibleIcon.classList.remove('hide');
  }
}

const pwToggleIcon = document.querySelector('#password_toggle_icon');
const pwInput = document.querySelector('#password_input');
const notVisibleIcon = document.querySelector('#not_visible');
const visibleIcon = document.querySelector('#visible');

pwToggleIcon.addEventListener('click', () => {
  togglePasswordVisibility(pwInput, notVisibleIcon, visibleIcon);
});

const reenterPwToggleIcon = document.querySelector('#re_password_toggle_icon');
const reenterPwInput = document.querySelector('#re_password_input');
const reenterNotVisibleIcon = document.querySelector('#re_not_visible');
const reenterVisibleIcon = document.querySelector('#re_visible');

reenterPwToggleIcon.addEventListener('click', () => {
  togglePasswordVisibility(reenterPwInput, reenterNotVisibleIcon, reenterVisibleIcon);
});