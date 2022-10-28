import popup from "./stuff/popup.js";
import getCookie from "./stuff/getCookie.js";
import setCookie from "./stuff/setCookie.js";

const btn1 = document.querySelectorAll('.shop > button');
let powerups = [
    {
        name: '+1',
        cost: 20,
        add: 1,
        desc: '+1 power for 20 points'
    },
    {
        name: '+50',
        cost: 100,
        add: 50,
        desc: '+50 power for 100 points'
    },
    {
        name: '+100',
        cost: 1000,
        add: 100,
        desc: '+100 power for 1000 points'
    },
    {
        name: '+500',
        cost: 10000,
        add: 500,
        desc: '+500 power for 10000 points'
    },
    {
        name: '+9999',
        cost: 99999,
        add: 9999,
        desc: '+9999 power for 99999 points'
    },

]



for(let q = 0; q < powerups.length; q++){
    btn1[q].innerHTML = `+${powerups[q].add} power </br></br> cost: ${powerups[q].cost}`;
    btn1[q].addEventListener('click', () => {
        if(getCookie('points') >= powerups[q].cost){
            const i = Math.round(parseInt(getCookie('points')) - powerups[q].cost); 
            setCookie('points', i, 20000);
            const x = Math.round(parseInt(getCookie('power')) + powerups[q].add);
            setCookie('power', x, 20000);
            document.querySelector('.points').innerHTML = getCookie('points');
            document.querySelector('.power').innerHTML = getCookie('power');
        } else {
            
            popup('Nie masz wystarczająco gotówki');
        }
    });
};


export default btn1;
