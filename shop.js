import popup from "./popup.js";
import getCookie from "./stuff/getCookie.js";
import setCookie from "./stuff/setCookie.js";

const btn1 = document.querySelectorAll('.shop > button');

const powerup1 = {
    name: 'powerup1',
    cost: 20,
    desc: '+1 power for 20 points'
}
btn1[0].innerHTML = `+1 power </br></br> cost: ${powerup1.cost}`;
btn1[0].addEventListener('click', () => {
    if(getCookie('points') >= 20){
        const i = Math.round(parseInt(getCookie('points')) - 20); 
        setCookie('points', i, 20000);
        const x = Math.round(parseInt(getCookie('power')) + 1);
        setCookie('power', x, 20000);
        document.querySelector('.points').innerHTML = getCookie('points');
        document.querySelector('.power').innerHTML = getCookie('power');
    } else {
        
        popup('Nie masz wystarczająco gotówki');
        console.log('nie masz wystarczająco gotówki')
    }
});


export default btn1;
