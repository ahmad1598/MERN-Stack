var slideIndex , slides, dots;
function initGallery(){
    slideIndex = 0;
    slides = document.getElementsByClassName('imageHolder');
    slides[slideIndex].style.opacity = 1;

    dots = [];
    var dotsContainer = document.getElementById('dotsContainer');

    for(let i = 0; i < slides.length;i++){
        var dot = document.createElement('span');
        dot.classList.add('dots');
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }

    dots[slideIndex].classList.add('active');

}

initGallery();

function moveSlide(n){
    var i, current, next;
    var moveSlideAnimClass = {
        forCurrent: "",
        forNext:""
    }
}