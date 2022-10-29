import getCookie from "./stuff/getCookie.js";
export default function update() {
    document.querySelector('.power').innerHTML = getCookie('power');
    document.querySelector('.points').innerHTML = (new Intl.NumberFormat(Option, {compactDisplay: "short"}).format(getCookie('points')));;
}
