const carouselContainer = document.querySelector('.carousel-container');
const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img');
const zt = new ZingTouch.Region(carouselContainer);

//buttons
const prevBTN = document.querySelector('#prevBTN');
const nextBTN = document.querySelector('#nextBTN');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlider.style.transform = `translateX(${-size * counter}px)`;

function prevImg() {
    if (counter <= 0) return;
    carouselSlider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlider.style.transform = `translateX(${-100 * counter}%)`;
}

function nextImg() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlider.style.transform = `translateX(${-100 * counter}%)`;
}

zt.bind(carouselContainer, 'swipe', function(e){
    const direction = e.detail.data[0].currentDirection;
    const left = 90 < direction && 270 > direction;
    const right = 90 > direction || (270 < direction && direction <=360);
    if (left)  nextImg();
    if (right) prevImg();  
});


prevBTN.addEventListener('click', prevImg);

nextBTN.addEventListener('click', nextImg);


carouselSlider.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlider.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlider.style.transform = `translateX(${-100 * counter}%)`;
    } 

    if(carouselImages[counter].id === 'firstClone') {
        carouselSlider.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = `translateX(${-100 * counter}%)`;
    } 
});