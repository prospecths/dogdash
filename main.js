//query selectors

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');

//functions


//event listeners
lightboxEnabled.forEach(images =>{
  images.addEventListener('click', (e) => {
    lightboxContainer.classList.add('active');
    lightboxImage.src= e.target.dataset.imagesrc;
    
  })
})

hamMenu.addEventListener('click',() => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})