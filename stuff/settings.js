import setCookie from "./setCookie.js";





const closeIco = document.querySelector('.closeicoCont');

const settingsIco = document.querySelector('.settingsicoCont');
settingsIco.addEventListener('click', () => {
    const settingsTable = document.querySelector('.settingsTable');

    settingsTable.classList.add("in");
    settingsIco.classList.add("out");
    closeIco.classList.add("in")

    setTimeout(() => {
        settingsIco.style.right = "-200px";
        settingsIco.classList.remove("out");

        settingsTable.style.right = '0';
        settingsTable.classList.remove("in");

        closeIco.style.right = '0';
        closeIco.classList.remove("in")
    }, 500);
});
closeIco.addEventListener('click', ()=> {
    const settingsTable = document.querySelector('.settingsTable');
    settingsTable.classList.add("out");

    settingsIco.classList.add("in");
    
    closeIco.classList.add("out");
    setTimeout(() => {
        closeIco.style.right = "-200px";
        closeIco.classList.remove("out");
        
        settingsIco.style.right = "0";
        settingsIco.classList.remove("in")

        settingsTable.style.right = '-200px';
        settingsTable.classList.remove("out");

    }, 500);
})


const volumeRange = document.querySelector('.volumeRange');
volumeRange.addEventListener('input', () => {
    setCookie("volumeValue", volumeRange.value, 2000);
    const volumeSpan = document.querySelector('.volume');
    volumeSpan.innerHTML = (volumeRange.value / 2).toFixed(0)
});






