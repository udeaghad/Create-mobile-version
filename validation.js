const form = document.getElementById('contact-form');

// const formInput = document.querySelectorAll('form .input-info');

const message = document.createElement('small');
message.classList.add('error');
form.appendChild(message);

function showMessage(input, message, type) {
  const msg = document.querySelector('small');
  msg.innerText = message;

  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailRegex = /^[a-z][a-z]+[a-z](?![A-z])/;

  const email = input.value.trim();
  if (!email.match(emailRegex)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a valid email in lowercase';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);

  if (emailValid) {
    form.submit();
  }
});
