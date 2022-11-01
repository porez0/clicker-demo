import getCookie from "./getCookie.js";
import setCookie from "./setCookie.js";


export let mainBtn = [{
    url: 'assets/mouseClick2.mp3',
    volume: 1
}];
export let shopButtonClick = [{
    url: 'assets/Projekt-bez-tytułu.mp3',
    volume: 0.3
}];

const mute = document.querySelector("#muteVolume");
mute.addEventListener('change', () =>{
    if(mute.checked){
        setCookie('muted?', 1, 2000)
    } else {
        setCookie('muted?', 0, 2000)
    }
})



export function playSound(sound){
    let audio = new Audio(sound);
    
    if(!mute.checked){
        audio.volume = (getCookie('volumeValue') / 200).toFixed(3);
    } else {
        audio.volume = 0;
    }
    
    audio.play()
}