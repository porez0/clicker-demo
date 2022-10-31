import getCookie from "./getCookie.js";
export default function update() {
    document.querySelector('.power').innerHTML = getCookie('power');
    document.querySelector('.points').innerHTML = (new Intl.NumberFormat(Option, {compactDisplay: "short"}).format(getCookie('points')));
    document.querySelector('.volume').innerHTML = (getCookie('volumeValue') / 2).toFixed(0);
    document.querySelector('.volumeRange').value = getCookie('volumeValue')
}

