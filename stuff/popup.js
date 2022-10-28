function popup(mess) {
    const para = document.createElement("p");
    const node = document.createTextNode(mess + '\n');
    para.appendChild(node);

    const element = document.querySelector(".popup");
    element.appendChild(para);
    setTimeout(() => {
        para.style.animationPlayState = 'running'
    }, 1000);
    setTimeout(() => {
        para.style.display = 'none'
    }, 2000);

}

export default popup;