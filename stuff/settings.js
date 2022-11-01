import setCookie from "./setCookie.js";




const settings = document.querySelector('.settingsico');
const close = document.querySelector('.close');
settings.addEventListener('click', () => {
    const settingsTable = document.querySelector('.settingsTable');
    settingsTable.classList.add("in");
    settingsTable.style.marginRight = "0px";
    settings.style.display = "none";
    close.style.display = "inline-block";

    setTimeout(() => {
        settingsTable.classList.remove("in");
    }, 500);
})
close.addEventListener('click', () => {
    const settingsTable = document.querySelector('.settingsTable');
    settingsTable.classList.add("out");
    settingsTable.style.marginRight = "-270px";
    settings.style.display = "inline-block";
    close.style.display = "none";

    setTimeout(() => {
        settingsTable.classList.remove("out");
    }, 500);
})




const volumeRange = document.querySelector('.volumeRange');
volumeRange.addEventListener('input', () => {
    setCookie("volumeValue", volumeRange.value, 2000);
    const volumeSpan = document.querySelector('.volume');
    volumeSpan.innerHTML = (volumeRange.value / 2).toFixed(0)
});






