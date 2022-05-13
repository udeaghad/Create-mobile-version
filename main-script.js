const navBar = document.querySelector('.nav-bar');
const menuBar = document.querySelector('.menu-bar');
const navList = document.querySelector('.nav-list');

navBar.addEventListener('click', () => {
  menuBar.classList.toggle('change');
});

navList.addEventListener('click', () => {
  navBar.click();
});

const {
  prName = 'Keeping track of hundreds of components',
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  tech = ['Ruby on rails', 'CSS', 'Java', 'Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'terminal', 'Codepen', 'html'],
  link = ['Source link', 'See Source'],
  icon = ['asset/images/java-git.png', 'asset/images/link-java.png'],
  image = ['asset/images/modal-image.png', 'asset/images/modal-img-desktop.jpg'],
} = ['modalInfo'];

const techName = (num) => tech[num];

const linkName = (num) => link[num];

const iconName = (num) => icon[num];

const imageName = (num) => image[num];

const projectContainer = document.querySelector('#portfolio');

for (let i = 0; i < 6; i += 1) {
  const cardHolder = document.createElement('div');
  cardHolder.classList.add('place-holder');
  projectContainer.appendChild(cardHolder);
}
const cardHolder = document.querySelectorAll('.place-holder');

for (let i = 0; i < cardHolder.length; i += 1) {
  const postStories = document.createElement('div');
  postStories.classList.add('post-stories');
  cardHolder[i].appendChild(postStories);
}

const postStories = document.querySelectorAll('.post-stories');

for (let i = 0; i < postStories.length; i += 1) {
  const multiStories = document.createElement('h2');
  multiStories.classList.add('multi-post');
  multiStories.innerText = 'Multi-Post Stories';
  postStories[i].appendChild(multiStories);

  const gainDiv = document.createElement('div');
  gainDiv.classList.add('gain');
  gainDiv.innerText = 'Gain+Glory';
  postStories[i].appendChild(gainDiv);

  const langList = document.createElement('ul');
  langList.classList.add('lang-list');
  postStories[i].appendChild(langList);

  const projectBtn = document.createElement('button');
  projectBtn.classList.add('button', 'project-button');
  projectBtn.innerText = 'See Project';
  postStories[i].appendChild(projectBtn);
  projectBtn.type = 'button';
}

const langList = document.querySelectorAll('.lang-list');

for (let i = 0; i < langList.length; i += 1) {
  const rubyBtn = document.createElement('li');
  rubyBtn.classList.add('btn');
  rubyBtn.innerText = techName(0);
  langList[i].appendChild(rubyBtn);

  const cssBtn = document.createElement('li');
  cssBtn.classList.add('btn');
  cssBtn.innerText = techName(1);
  langList[i].appendChild(cssBtn);

  const jsBtn = document.createElement('li');
  jsBtn.classList.add('btn');
  jsBtn.innerText = techName(5);
  langList[i].appendChild(jsBtn);

  const htmlBtn = document.createElement('li');
  htmlBtn.classList.add('btn');
  htmlBtn.innerText = techName(9);
  langList[i].appendChild(htmlBtn);
}

const projectCard = document.querySelectorAll('.place-holder');

for (let i = 0; i < projectCard.length; i += 1) {
  const modal = document.createElement('div');
  modal.classList.add('modal', 'hidden');
  projectCard[i].appendChild(modal);

  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'hidden');
  projectCard[i].appendChild(overlay);
}

const projectButton = document.querySelectorAll('.project-button');

for (let i = 0; i < projectButton.length; i += 1) {
  projectButton[i].classList.add('show-modal');
}

const modal = document.querySelectorAll('.modal');
for (let i = 0; i < modal.length; i += 1) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  modal[i].appendChild(imgContainer);

  const modalHeading = document.createElement('h1');
  modalHeading.classList.add('modal-heading');
  modal[i].appendChild(modalHeading);
  modalHeading.innerText = prName;

  const techContainer = document.createElement('div');
  techContainer.classList.add('tech-container');
  modal[i].appendChild(techContainer);

  const modalDesc = document.createElement('p');
  modalDesc.classList.add('modal-desc');
  modal[i].appendChild(modalDesc);
  modalDesc.innerText = description;

  const sourceContainer = document.createElement('div');
  sourceContainer.classList.add('source-container');
  modal[i].appendChild(sourceContainer);
}

const imgContainer = document.querySelectorAll('.img-container');

for (let i = 0; i < imgContainer.length; i += 1) {
  const modalImg = document.createElement('img');
  modalImg.classList.add('modal-img');
  imgContainer[i].appendChild(modalImg);
  modalImg.src = imageName(0);
  modalImg.alt = 'modal image';

  const modalImgDesk = document.createElement('img');
  modalImgDesk.classList.add('modal-desk-img');
  imgContainer[i].appendChild(modalImgDesk);
  modalImgDesk.src = imageName(1);
  modalImgDesk.alt = 'modal image';

  const btnCloseModal = document.createElement('button');
  btnCloseModal.classList.add('close-modal');
  imgContainer[i].appendChild(btnCloseModal);
  btnCloseModal.innerText = 'X';
}

const techContainer = document.querySelectorAll('.tech-container');

for (let i = 0; i < techContainer.length; i += 1) {
  const rubyLink = document.createElement('div');
  rubyLink.classList.add('btn', 'mob-btn');
  techContainer[i].appendChild(rubyLink);
  rubyLink.innerText = techName(0);

  const cssLink = document.createElement('div');
  cssLink.classList.add('btn', 'mob-btn');
  techContainer[i].appendChild(cssLink);
  cssLink.innerText = techName(1);

  const javaLink = document.createElement('div');
  javaLink.classList.add('btn', 'mob-btn');
  techContainer[i].appendChild(javaLink);
  javaLink.innerText = techName(5);

  const codekitLink = document.createElement('div');
  codekitLink.classList.add('btn', 'desk-btn');
  techContainer[i].appendChild(codekitLink);
  codekitLink.innerText = techName(3);

  const githubLink = document.createElement('div');
  githubLink.classList.add('btn', 'desk-btn');
  techContainer[i].appendChild(githubLink);
  githubLink.innerText = techName(4);

  const scriptLink = document.createElement('div');
  scriptLink.classList.add('btn', 'desk-btn');
  techContainer[i].appendChild(scriptLink);
  scriptLink.innerText = techName(5);

  const bootsLink = document.createElement('div');
  bootsLink.classList.add('btn', 'desk-btn');
  techContainer[i].appendChild(bootsLink);
  bootsLink.innerText = techName(6);

  const terminalLink = document.createElement('div');
  terminalLink.classList.add('btn', 'desk-btn');
  techContainer[i].appendChild(terminalLink);
  terminalLink.innerText = techName(7);

  const codepenLink = document.createElement('div');
  codepenLink.classList.add('btn', 'desk-btn');
  techContainer[i].appendChild(codepenLink);
  codepenLink.innerText = techName(8);
}

const sourceContainer = document.querySelectorAll('.source-container');

for (let i = 0; i < sourceContainer.length; i += 1) {
  const sourceLive = document.createElement('div');
  sourceLive.classList.add('resume', 'project-button', 'modal-icon-1');
  sourceContainer[i].appendChild(sourceLive);
  sourceLive.innerText = linkName(0);

  const seeSource = document.createElement('div');
  seeSource.classList.add('resume', 'project-button', 'modal-icon-2');
  sourceContainer[i].appendChild(seeSource);
  seeSource.innerText = linkName(1);
}

const linkIcon1 = document.querySelectorAll('.modal-icon-1');
const linkIcon2 = document.querySelectorAll('.modal-icon-2');

for (let i = 0; i < linkIcon1.length; i += 1) {
  const linkIconImg = document.createElement('img');
  linkIconImg.classList.add('link-icon-img');
  linkIcon1[i].appendChild(linkIconImg);
  linkIconImg.src = iconName(0);
  linkIconImg.alt = 'source link icon';
}

for (let i = 0; i < linkIcon2.length; i += 1) {
  const linkIconImg = document.createElement('img');
  linkIconImg.classList.add('link-icon-img');
  linkIcon2[i].appendChild(linkIconImg);
  linkIconImg.src = iconName(1);
  linkIconImg.alt = 'source link icon';
}

const overlay = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');

const openAndClose = () => {
  for (let i = 0; i < modal.length; i += 1) {
    modal[i].classList.toggle('hidden');
    overlay[i].classList.toggle('hidden');
  }
};

for (let i = 0; i < projectButton.length; i += 1) {
  projectButton[i].addEventListener('click', openAndClose);
}

for (let i = 0; i < btnCloseModal.length; i += 1) {
  btnCloseModal[i].addEventListener('click', openAndClose);
}

const form = document.getElementById('contact-form');

const formInput = document.querySelectorAll('form .input-control');

for (let i = 0; i < formInput.length; i += 1) {
  const message = document.createElement('small');
  message.classList.add('error');
  formInput[i].appendChild(message);
}

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
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
