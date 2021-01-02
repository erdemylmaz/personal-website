// TYPING ANIMATION

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.175em solid white }";
  document.body.appendChild(css);
};

// theme
const body = document.querySelector('body');
const card = document.querySelector('#card');
const list = document.querySelectorAll('h3');
const langENG = document.querySelector('#eng');
const documentName = document.querySelector('#name');
const vertical = document.querySelector('#vertical');
const vertical2 = document.querySelector('#vertical2');
const lightB = document.getElementById('lightMode');
const darkB = document.getElementById('darkMode');

class Theme {

  theme = "light";

  darkMode = () => {
    body.style.backgroundColor = "var(--foreground)";
    card.style.boxShadow = " 0 0 10px 5px black";

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
    list[0].style.color = "rgb(216, 167, 77)";
    list[0].onmouseover = () => list[0].style.color = "rgb(216, 167, 77)";
    list[0].onmouseleave = () => list[0].style.color = "rgb(216, 167, 77)";
    documentName.style.color = "gray";
  
    langENG.style.color = "gray";
    langENG.onmouseover = () => langENG.style.color = "black";
    langENG.onmouseleave = () => langENG.style.color = "gray";
    vertical.style.color = "gray";
    vertical2.style.color = "gray";
    
    darkB.style.color = "rgb(216, 167, 77)";
    lightB.style.color = "gray";
  }

  lightMode = () => {
    body.style.backgroundColor = "rgb(2, 116, 201)";
    card.style.boxShadow = " 0 0 10px 5px #03a9f4";

    for(let x = 0; x < list.length; x++) {
        list[x].style.color = "white";
        list[x].style.transition = "250ms";
        list[x].onmouseover = () => {
            list[x].style.color = "#03a9f4";
        };
        list[x].onmouseleave = () => {
            list[x].style.color = "white";
        }
    }
    list[0].style.color = "rgb(216, 167, 77)";
    list[0].onmouseover = () => list[0].style.color = "rgb(216, 167, 77)";
    list[0].onmouseleave = () => list[0].style.color = "rgb(216, 167, 77)";
    
    documentName.style.color = "white";
  
    langENG.style.color = "white";
    langENG.onmouseover = () => langTR.style.color = "black";
    langENG.onmouseleave = () => langTR.style.color = "white";

    vertical.style.color = "white";
    vertical2.style.color = "white";

    lightB.style.color = "rgb(216, 167, 77)";
    darkB.style.color = "white";
  }


  setTheme = () => {
    let d = new Date();

    let h = d.getHours();

    if (18 > h > 7) {
      this.lightMode();
    } else if (h >= 18) {
       this.darkMode();
    } else if (h <= 7) {
       this.darkMode();
    }
  }

}

const theme = new Theme;

window.addEventListener('load', theme.setTheme);
lightB.addEventListener('click', theme.lightMode);
darkB.addEventListener('click', theme.darkMode);

