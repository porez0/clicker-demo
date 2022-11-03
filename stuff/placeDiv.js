import getCookie from "./getCookie.js";
import { formate } from "./textFormating.js";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
export function placeDiv() {
    const clickEff = document.querySelector('.clickEff').getBoundingClientRect();
    let height = clickEff.top;
    let heighte = clickEff.bottom;
    let width = clickEff.left;
    let widthe = clickEff.right;
    


    let b1 = document.createElement("span");
    let xPosition = getRandomArbitrary(width, widthe) - (b1.clientWidth);
    let yPosition = getRandomArbitrary(height, heighte) - (b1.clientHeight);




    b1.style.left = xPosition + "px";
    b1.style.top = yPosition + "px";
    b1.classList.add('fadeout');
    b1.innerText = `+${formate(getCookie('power'))}`;
    setTimeout(() => {
        b1.remove();
        b1.classList.remove('fadeout');
    }, 500);
    
    document.querySelector('.clickEff').appendChild(b1);
}
