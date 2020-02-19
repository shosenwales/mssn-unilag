let sliderimages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

//clear all images
reset = () => {
   for(let i = 0; i < sliderimages.length; i++){
      sliderimages[i].style.display = 'none'; 
   } 
}

beginSlide = () => {
    reset();
    sliderimages[0].style.display = 'block';
}

//slide to left
slideLeft = () => {
    reset();
    sliderimages[current - 1].style.display = 'block';
    current--;
}
//slide to right
slideRight = () => {
    reset();
    sliderimages[current + 1].style.display = 'block';
    current++;
}
//left arrow click
arrowLeft.addEventListener('click', ()=> {
    if(current === 0){
        current = sliderimages.length;
    }
    slideLeft();
});

//right arrow click
arrowRight.addEventListener('click', ()=> {
    if(current === sliderimages.length - 1){
        current = -1
    }
    slideRight();
});
beginSlide();


let accordions = document.querySelectorAll("button.accordion");

for(var i=0; i<accordions.length; i++){
    accordions[i].onclick= function(){
        // this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}