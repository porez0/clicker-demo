import setCookie from "./setCookie.js";


const volumeRange = document.querySelector('.volumeRange');
volumeRange.addEventListener('input', () => {
    setCookie("volumeValue", volumeRange.value, 2000);
    const volumeSpan = document.querySelector('.volume');
    volumeSpan.innerHTML = (volumeRange.value / 2).toFixed(0)
});






