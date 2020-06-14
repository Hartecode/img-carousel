const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img');

//buttons
const prevBTN = document.querySelector('#prevBTN');
const nextBTN = document.querySelector('#nextBTN');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlider.style.transform = `translateX(${-size * counter}px)`;
console.log(carouselImages, carouselSlider, prevBTN, nextBTN);

prevBTN.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlider.style.transition = 'transform 0.4s ease-in-out';
    console.log(carouselSlider.style.transition)
    counter--;
    carouselSlider.style.transform = `translateX(${-size * counter}px)`;
});

nextBTN.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;

    carouselSlider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlider.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlider.addEventListener('transitionend', () => {
    console.log('Transition ended', carouselImages[counter].id);
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlider.style.transition = 'none';
        console.log(carouselSlider.style.transition)
        counter = carouselImages.length - 2;
        carouselSlider.style.transform = `translateX(${-size * counter}px)`;
    } 

    if(carouselImages[counter].id === 'firstClone') {
        carouselSlider.style.transition = 'none';
        console.log(carouselSlider.style.transition)
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = `translateX(${-size * counter}px)`;
    } 
});