document.addEventListener("DOMContentLoaded",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity 1s";

document.body.style.opacity="1";

},100);


});
const images = [

"images/look1.jpg",

"images/look2.jpg",

"images/look3.jpg",

"images/look4.jpg",

"images/look5.jpg"

];


let current = 0;


const heroImage = document.getElementById("changing-image");


setInterval(()=>{


heroImage.style.opacity = 0;


setTimeout(()=>{


current++;

if(current >= images.length){

current = 0;

}


heroImage.src = images[current];


heroImage.style.opacity = 1;


},1500);



},6000);
