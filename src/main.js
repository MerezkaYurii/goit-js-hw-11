// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import {serchCategory} from "./js/pixabay-api";
import {createMarkup, clear} from "./js/render-functions";


iziToast.settings({
    position: 'topRight',
  });


 const loading = document.querySelector(".js-hidden")
const containerGallery = document.querySelector(".gallery");
const form = document.querySelector(".form");
form.addEventListener("submit", submitInput);




function submitInput (event) {
    event.preventDefault();
const category = event.target.elements.category.value.trim();

if(!category) {
  iziToast.error({
    // title: 'Error',
    message: "Sorry, there are no images matching your search query. Please try again!",
    iconUrl: "./img/error.png",  
    iconColor: '#fff',
    imageWidth: 15,
    messageColor: '#fff',
    titleColor: '#fff',
  }) ;
  clear()
 return
}

clear();
loading.classList.remove("hidden");
 
serchCategory(category)
 .then( data => {
if(data.hits.length === 0){
  iziToast.error({
    // title: 'Error',
    message:  "No images found", 
    iconUrl: "./img/error.png",  
    iconColor: '#fff',
    imageWidth: 15,
    messageColor: '#fff',
    titleColor: '#fff',
  });
 
  return;
}
  containerGallery.innerHTML = createMarkup(data.hits);
  litebox.refresh()
  })
   .catch((error) => {
  iziToast.error({
    // title: 'Error',
    message:   "Error fetching images. Please try again.", 
    iconUrl: "./img/error.png",  
    iconColor: '#fff',
    imageWidth: 15,
    messageColor: '#fff',
    titleColor: '#fff',
  });
 })
.finally (() => {
  event.target.reset()
  loading.classList.add("hidden")
});
}



let litebox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'imageTitle',
});
