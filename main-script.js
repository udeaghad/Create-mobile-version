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
      "Ruby on rails", "CSS", "Java"
    ],
  link: [
    "Source link", "See Source"
    ],

  icon: [
    "asset/images/java-git.png", "asset/images/link-java.png"
  ]

}

const projectCard = document.querySelectorAll(".place-holder");


for (let i = 0; i < projectCard.length; i++){
const modal = document.createElement("div");
modal.classList.add("modal", "hidden");
projectCard[i].appendChild(modal);


const overlay = document.createElement("div");
overlay.classList.add("overlay", "hidden");
projectCard[i].appendChild(overlay)
}

const projectButton = document.querySelectorAll(".project-button");

for (let i = 0; i < projectButton.length; i++){
projectButton[i].classList.add("show-modal");

}

const modal = document.querySelectorAll(".modal")
 for (let i = 0; i < modal.length; i++){ 
const imgContainer = document.createElement("div");
imgContainer.classList.add("img-container");
modal[i].appendChild(imgContainer)

const modalHeading = document.createElement("h1");
modalHeading.classList.add("modal-heading");
modal[i].appendChild(modalHeading);
modalHeading.innerText = modalInfo["name"]

const techContainer = document.createElement("div");
techContainer.classList.add("tech-container");
modal[i].appendChild(techContainer);

const modalDesc = document.createElement("p");
modalDesc.classList.add("modal-desc");
modal[i].appendChild(modalDesc);
modalDesc.innerText = modalInfo["description"];

const sourceContainer = document.createElement("div");
sourceContainer.classList.add("source-container");
modal[i].appendChild(sourceContainer);
}

const imgContainer = document.querySelectorAll(".img-container")

for (let i = 0;i < imgContainer.length; i++){ 
const modalImg = document.createElement("img");
modalImg.classList.add("modal-img");
imgContainer[i].appendChild(modalImg);
modalImg.src = modalInfo["image"];
modalImg.alt = "modal image";

const btnCloseModal = document.createElement("button");
btnCloseModal.classList.add("close-modal");
imgContainer[i].appendChild(btnCloseModal);
btnCloseModal.innerText = "X";
}


const techContainer = document.querySelectorAll(".tech-container")

for  (let i = 0; i < techContainer.length; i++){ 
const rubyLink = document.createElement("div");
rubyLink.classList.add("btn");
techContainer[i].appendChild(rubyLink)
rubyLink.innerText = modalInfo["tech"][0];


const cssLink = document.createElement("div");
cssLink.classList.add("btn");
techContainer[i].appendChild(cssLink)
cssLink.innerText = modalInfo["tech"][1];


const javaLink = document.createElement("div");
javaLink.classList.add("btn");
techContainer[i].appendChild(javaLink)
javaLink.innerText = modalInfo["tech"][2];
}





const sourceContainer = document.querySelectorAll(".source-container")

for (let i = 0; i < sourceContainer.length; i++){

const sourceLive = document.createElement("div");
sourceLive.classList.add("resume", "project-button", "modal-icon-1");
sourceContainer[i].appendChild(sourceLive)
sourceLive.innerText = modalInfo["link"][0];

const seeSource = document.createElement("div");
seeSource.classList.add("resume", "project-button", "modal-icon-2");
sourceContainer[i].appendChild(seeSource)
seeSource.innerText = modalInfo["link"][1];

}

const linkIcon1 = document.querySelectorAll(".modal-icon-1");
const linkIcon2 = document.querySelectorAll(".modal-icon-2");

for (let i =0; i < linkIcon1.length; i++){
const linkIconImg = document.createElement("img");
linkIconImg.classList.add("link-icon-img");
linkIcon1[i].appendChild(linkIconImg);
linkIconImg.src = modalInfo["icon"][0];
linkIconImg.alt = "source link icon"
}



for (let i =0; i < linkIcon2.length; i++){
const linkIconImg = document.createElement("img");
linkIconImg.classList.add("link-icon-img");
linkIcon2[i].appendChild(linkIconImg);
linkIconImg.src = modalInfo["icon"][1];
linkIconImg.alt = "source link icon"
}



const overlay = document.querySelectorAll(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal")

const openAndClose = function () {
for (let i = 0; i < modal.length; i++){

  modal[i].classList.toggle("hidden");
  overlay[i].classList.toggle("hidden");
}
};


for (let i = 0; i < projectButton.length; i++){
projectButton[i].addEventListener("click", openAndClose);
 }

for (let i = 0; i < btnCloseModal.length; i++){
    btnCloseModal[i].addEventListener("click", openAndClose);
}