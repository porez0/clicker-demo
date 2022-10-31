import setCookie from "./setCookie.js";
import getCookie from "./getCookie.js";
import update from "./update.js";

function load() {
    function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) } 
    
    if(!isNumber(getCookie('points'))){
        setCookie('points', 1, 2000);
    }
    if(!isNumber(getCookie('power'))){
        setCookie('power', 1, 2000);
    }

    if(!isNumber(getCookie('volumeValue'))){
        setCookie('volumeValue', 100, 2000);
    }
    update();
    console.log('Poprawnie załadowano strone!');
    console.log('points: ' + getCookie('points') + ' power: ' + getCookie('power'))
}

export default load;