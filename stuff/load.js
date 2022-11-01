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
    if(!isNumber(getCookie('muted?'))){
        setCookie('muted?', 0, 2000);
    }
    if(getCookie('muted?') === "1"){
        const mute = document.querySelector("#muteVolume");
        mute.checked = "true"
    }
    update();
    console.log('Poprawnie załadowano strone!');
}

export default load;