import popup from "./popup.js";
import getCookie from "./getCookie.js";
import setCookie from "./setCookie.js";
import update from "./update.js";
import { playSound, shopButtonClick } from "./audio.js";
import { formate } from "./textFormating.js";

const btn1 = document.querySelectorAll('.shop > button');
let powerups = [
    {
        name: '+1',
        cost: 100,
        add: 1,
    },
    {
        name: '+25',
        cost: 1000,
        add: 25,
    },
    {
        name: '+50',
        cost: 5000,
        add: 100,
    },
    {
        name: '+100',
        cost: 10000,
        add: 500,
    },
    {
        name: '+10000',
        cost: 100000,
        add: 10000,
    },

]

for(let q = 0; q < powerups.length; q++){
    btn1[q].innerHTML = `+${formate(powerups[q].add)} power </br></br> cost: ${formate(powerups[q].cost)}`;
    btn1[q].addEventListener('click', () => {
        if(getCookie('points') >= powerups[q].cost){
            const i = Math.round(parseInt(getCookie('points')) - powerups[q].cost); 
            setCookie('points', i, 20000);
            const x = Math.round(parseInt(getCookie('power')) + powerups[q].add);
            setCookie('power', x, 20000);
            playSound(shopButtonClick[0].url);      
            update();
        } else {
            popup('Nie masz wystarczająco gotówki');
        }
    });
};


export default btn1;
