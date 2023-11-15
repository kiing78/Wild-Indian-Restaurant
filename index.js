
function boutonPrecedent(){
    const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slideArrowPrev");
    if(prevButton){
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    }
    else{
        console.log("pas de prevBouton");
    }
}

function boutonSuivant(){
    const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
    const nextButton = document.getElementById("slide-arrow-next");
    if(nextButton){
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    }
    else{
        console.log("pas de nextButton");
    }
}