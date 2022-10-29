import setCookie from "./stuff/setCookie.js";
import getCookie from "./stuff/getCookie.js";
import load from "./stuff/load.js";
import update from "./update.js"; 
load();


const btn = document.querySelector('.btn')
btn.addEventListener('mousedown', () => {
    let points = parseInt(getCookie('points')) + parseInt(getCookie('power'));
    setCookie('points', parseInt(points), 2000);
    
    let audio = new Audio("/assets/mouseClick2.mp3");
    audio.volume = 0.1;
    audio.play();
    update();
});



