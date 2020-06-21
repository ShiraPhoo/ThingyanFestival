// Menu Toggle
const selectElement = (element) => {
    return document.querySelector(element);
}

let menuToggle = selectElement(".menu-toggle");
let body = selectElement(".header");

menuToggle.addEventListener("click", ()=>{
    body.classList.toggle('open');
});

// Get the modal
var modal = document.getElementById("myModal");

var img = document.querySelectorAll(".gallery__img")
var modalImg = document.getElementById("img01");
console.log(modalImg);

Array.from(img).forEach(function(imgs){
    imgs.addEventListener("click", function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        console.log(modalImg.src);
    })
})

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";

} 

// Scroll Reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
})

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
})