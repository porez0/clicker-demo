import setCookie from "./stuff/setCookie.js";
import getCookie from "./stuff/getCookie.js";
import load from "./stuff/load.js";
import btn1 from "./shop.js";
import popup from "./popup.js";
load();


const btn = document.querySelector('.btn')
btn.addEventListener('mousedown', () => {
    let points = parseInt(getCookie('points')) + parseInt(getCookie('power'));
    setCookie('points', parseInt(points), 2000);

    document.querySelector('.points').innerHTML = points;

    
    // console.log('points: ' + getCookie('points') + ' power: ' + getCookie('power'))
});



