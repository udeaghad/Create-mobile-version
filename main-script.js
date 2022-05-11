const navBar = document.querySelector('.nav-bar');
const menuBar = document.querySelector('.menu-bar');
const navList = document.querySelector('.nav-list');

navBar.addEventListener('click', () => {
  menuBar.classList.toggle('change');
});

navList.addEventListener('click', () => {
  navBar.click();
});

const modalInfo = {
  name: "Keeping track of hundreds of components",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: "asset/images/modal-image.png",
  tech:
    [
      "Ruby", "CSS", "Java"
    ],
  link: [
    "Source link", "See Source"
    ],

}

const projectCard = document.querySelectorAll(".place-holder");
const projectButton = document.querySelector(".project-button");
projectButton.classList.add("show-modal");

//for (let i = 0; i < projectCard.length;)
const modal = document.createElement("div");
modal.classList.add("modal", "hidden");
projectCard.appendChild(modal);

const imgContainer = document.createElement("div");
imgContainer.classList.add("img-container");
modal.appendChild(imgContainer)

const modalImg = document.createElement("img");
modalImg.classList.add("modal-img");
imgContainer.appendChild(modalImg);
modalImg.src = modalInfo["image"];
modalImg.alt = "modal image";

const btnCloseModal = document.createElement("button");
btnCloseModal.classList.add("close-modal");
imgContainer.appendChild(btnCloseModal);
btnCloseModal.innerText = "X";

const modalHeading = document.createElement("h1");
modalHeading.classList.add("modal-heading");
modal.appendChild(modalHeading);
modalHeading.innerText = modalInfo["name"]

const techContainer = document.createElement("div");
techContainer.classList.add("tech-container");
modal.appendChild(techContainer);

const rubyLink = document.createElement("div");
rubyLink.classList.add("btn");
techContainer.appendChild(rubyLink)
rubyLink.innerText = modalInfo["tech"][0];

const cssLink = document.createElement("div");
cssLink.classList.add("btn");
techContainer.appendChild(cssLink)
cssLink.innerText = modalInfo["tech"][1];

const javaLink = document.createElement("div");
javaLink.classList.add("btn");
techContainer.appendChild(javaLink)
javaLink.innerText = modalInfo["tech"][2];


const modalDesc = document.createElement("p");
modalDesc.classList.add("modal-desc");
modal.appendChild(modalDesc);
modalDesc.innerText = modalInfo["description"];

const sourceLink = document.createElement("div");
sourceLink.classList.add("source-container");
modal.appendChild(sourceLink);

const sourceLive = document.createElement("div");
sourceLive.classList.add("button", "project-button");
sourceLink.appendChild(sourceLive)
sourceLive.innerText = modalInfo["link"][0];

const seeSource = document.createElement("div");
seeSource.classList.add("button", "project-button");
sourceLink.appendChild(seeSource)
seeSource.innerText = modalInfo["link"][1];

const overlay = document.createElement("div");
overlay.classList.add("overlay", "hidden");
projectCard.appendChild(overlay)




const openAndClose = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};


projectButton.addEventListener("click", openAndClose);

btnCloseModal.addEventListener("click", openAndClose);