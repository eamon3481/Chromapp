const body = document.querySelector("body");
const ImgNum = 10;

function paintImg(ImgNumber){ 
    const image = new Image();
    image.src = `img/${ImgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
   
    const Number = Math.floor(Math.random()*ImgNum);
    return Number;

}


function init() {
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();