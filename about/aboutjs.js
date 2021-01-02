let list = document.querySelectorAll('h3');
let documentName = document.querySelector('#name');
let text = document.querySelector('#text');
let mail = document.querySelector('#mail');

setTheme = () => {
    let d = new Date();

    let h = d.getHours();

    if (18 > h > 07) {
        document.body.style.backgroundColor = "var(--background)";
        document.body.style.color = "black";
    } else if (h >= 18) {
        document.body.style.backgroundColor = "#131313";
        document.body.style.color = "gray";
        documentName.style.color = "gray";
        text.style.color = "gray";
        mail.style.color = "gray";
        for(let x = 0; x < list.length; x++) {
            list[x].style.color = "gray";
            list[x].style.transition = "250ms";
            list[x].onmouseover = () => {
                list[x].style.color = "black";
            };
            list[x].onmouseleave = () => {
                list[x].style.color = "gray";
            }
        }
        list[1].style.color = "rgb(216, 167, 77)";
        list[1].onmouseover = () => list[1].style.color = "rgb(216, 167, 77)";
        list[1].onmouseleave = () => list[1].style.color = "rgb(216, 167, 77)";
    } else if (h <= 07) {
        document.body.style.backgroundColor = "#131313";
        document.body.style.color = "rgb(150, 150, 150)";
        document.querySelector('#name').style.color = "black";
    }
};

window.addEventListener('load', setTheme);
