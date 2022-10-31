import getCookie from "./getCookie.js";



export let mainBtn = [{
    url: 'assets/mouseClick2.mp3',
    volume: 1
}];
export let shopButtonClick = [{
    url: 'assets/Projekt-bez-tytułu.mp3',
    volume: 0.3
}];




export function playSound(sound){
    let audio = new Audio(sound);
    audio.volume = (getCookie('volumeValue') / 200).toFixed(3);
    audio.play()
}