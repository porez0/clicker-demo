import setCookie from "./setCookie.js";

const animebg = document.querySelector('#movingBg');
animebg.addEventListener('change' , () => {
    const video = document.querySelector('.video-bg');
    if(animebg.checked){
        setCookie('animebg', 1, 2000);
        video.play();
    } else {
        setCookie('animebg', 0, 2000);
        video.pause();
    }
})