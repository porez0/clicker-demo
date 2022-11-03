import setCookie from "./stuff/setCookie.js";
import getCookie from "./stuff/getCookie.js";
import load from "./stuff/load.js";
import update from "./stuff/update.js"; 
import { mainBtn, playSound } from "./stuff/audio.js";
import "./stuff/audio.js";
import "./stuff/animeBg.js";
import { placeDiv } from "./stuff/placeDiv.js";

load();

const btn = document.querySelector('.btn')
btn.addEventListener('mousedown', (event) => {
    let points = parseInt(getCookie('points')) + parseInt(getCookie('power'));
    setCookie('points', parseInt(points), 2000);


    

    
    placeDiv(event.clientX, event.clientY);
    playSound(mainBtn[0].url);
    update();
});



