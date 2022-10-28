import setCookie from "./stuff/setCookie.js";
import getCookie from "./stuff/getCookie.js";

let points;
let power;



function save() {
    setCookie('points', points, 20000);
    setCookie('power', power, 20000);
    console.log('Zapisano! ' + 'points: ' + points + ' ' + 'power: ' + power)
};

function load() {
    const cpoints = parseInt(getCookie('points'));
    const cpower = parseInt(getCookie('power'));
    if (!cpoints <= 0) {
        points = cpoints;
    } else {
        points = 1;
    }
    if (!cpower <= 0) {
        power = cpower;
    } else {
        power = 1;
    }

    console.log('Zapisano! ' + 'points: ' + points + ' ' + 'power: ' + power)
    Update();
}
load();

function Update() {
    document.querySelector('.points').innerHTML = points;
    document.querySelector('.power').innerHTML = power;

    save();
}
Update();

const shp = document.querySelector('.shp1');
shp.addEventListener('click', () => {

    points -= 20;
    power += 1;

    Update();
    console.log('kupiono +1 ' + 'balans: ' + points);
})

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    points += power;
    console.log(points);


    Update();
});