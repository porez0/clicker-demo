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
        para.remove();
    }, 1900);

}

export default popup;