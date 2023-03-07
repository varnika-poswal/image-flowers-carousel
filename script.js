//left///
const image=document.getElementById("move");
const images=document.querySelector("img");
let start=0;
function move(){
    start++;
    if(start>images.length-1){
        start=0;
    }
    image.style.transform=`translateX(${-start*300}px)`;
}
setInterval(move,500);
//middle///
const image2=document.getElementById("move2");
const images2=document.querySelector("img");
let start2=0;
function move2(){
    start2++;
    if(start2>images2.length-1){
        start2=0;
    }
    image2.style.transform=`translateY(${-start2*470}px)`;
}
setInterval(move2,500);



//right///

const image1=document.getElementById("move1");
const images1=document.querySelector("img");
let start1=0;
function move1(){
    start1++;
    if(start1>images1.length-1){
        start1=0;
    }
    image1.style.transform=`translateX(${-start1*300}px)`;
}
setInterval(move1,500);
//stars
function stars(){
const stars=document.createElement("div");
stars.classList.add("stars");
stars.style.left=Math.random()*100+"vw";
stars.innerText="♦";
document.body.appendChild(stars);
setTimeout(()=>{
    stars.remove();
},3000);
}
setInterval(stars,70);
