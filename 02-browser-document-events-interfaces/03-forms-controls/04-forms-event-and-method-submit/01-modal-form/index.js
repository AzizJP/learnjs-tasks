'use strict';

const showButton = document.getElementById('show-button');
const formContainer = document.getElementById('prompt-form-container');

const form = document.getElementById('prompt-form');
const formTextField = form.text;
const formCancelButton = form.cancel;

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.append(overlay);

const addOverlay = () => {
  overlay.style.display = 'block';
};

const closeOverlay = () => {
  overlay.style.display = 'none';
};

const showNotification = value => {
  alert('Вы ввели: ' + value);
};

const showPopup = () => {
  addOverlay();
  formContainer.style.display = 'block';
  formTextField.focus();
  document.addEventListener('keydown', onEscape);
};

const closePopup = value => {
  showNotification(value);
  closeOverlay();
  formContainer.style.display = 'none';
  document.removeEventListener('keydown', onEscape);
};

const formOnSubmit = evt => {
  evt.preventDefault();

  const enteredText = formTextField.value;
  if (enteredText === '') return;
  closePopup(enteredText);
};

const onFormCancelButton = () => {
  const value = null;
  closePopup(value);
};

const onEscape = evt => {
  if (evt.key === 'Escape') {
    onFormCancelButton();
  }
};

formCancelButton.onkeydown = function (evt) {
  if (evt.key == 'Tab' && !evt.shiftKey) {
    formTextField.focus();
    return false;
  }
};

formTextField.onkeydown = function (evt) {
  if (evt.key == 'Tab' && evt.shiftKey) {
    formCancelButton.focus();
    return false;
  }
};

showButton.addEventListener('click', showPopup);
form.addEventListener('submit', formOnSubmit);
formCancelButton.addEventListener('click', onFormCancelButton);
