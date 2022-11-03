import getCookie from "./getCookie.js";
import { formate } from "./textFormating.js";
export default function update() {
    document.querySelector('.power').innerHTML = formate(getCookie('power'));
    document.querySelector('.points').innerHTML = formate(getCookie('points'));
    document.querySelector('.volume').innerHTML = (getCookie('volumeValue') / 2).toFixed(0);
    document.querySelector('.volumeRange').value = getCookie('volumeValue')
}

