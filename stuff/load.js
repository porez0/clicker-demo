import setCookie from "./setCookie.js";
import getCookie from "./getCookie.js";

function load() {
    function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) } 
    
    if(!isNumber(getCookie('points'))){
        setCookie('points', 1, 2000);
    }
    if(!isNumber(getCookie('power'))){
        setCookie('power', 1, 2000);
    }
    document.querySelector('.points').innerHTML = getCookie('points');
    document.querySelector('.power').innerHTML = getCookie('power');

    console.log('Poprawnie załadowano strone!');
    console.log('points: ' + getCookie('points') + ' power: ' + getCookie('power'))
}

export default load;