const turnOn = document.querySelector(".turnOn");
const turnOnff = document.querySelector(".turnOnff");
const lightBulb = document.querySelector(".lightbulb");

function lampOn() {
    lightBulb.src = "./img/ligada.jpg";
}

function lampOff(){
    lightBulb.src = "./img/desligada.jpg";
}
function lampBroken(){
    lightBulb.src="./img/quebrada.jpg"
}

turnOn.addEventListener("click", lampOn);
turnOnff.addEventListener("click",lampOff);
lightBulb.addEventListener("mouseover",lampOn);
lightBulb.addEventListener("mouseleave",lampOff);
lightBulb.addEventListener("dblclick",lampBroken);



