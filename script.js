/* --------------------------- Meeting 9 | CLick and Change Mini Text ------------------------- */
function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll down";

    document.getElementById("icon-up").style.display = "none";
    document.getElementById("icon-down").style.display = "block";

    var iconUp = document.getElementsByClassName("icon-up")[0];

    iconUp.onclick = function() {
        var button = document.getElementsByClassName("icon-down");
        button.style.display = "block";
    };
}

/* --------------------------- Meeting 11 | Like and Dislike ------------------------- */
var btnLike = document.querySelector('#green');
var btnDislike = document.querySelector('#red');

if(btnLike) {
    btnLike.onclick = likeColor;
}

if(btnDislike) {
    btnDislike.onclick = dislikeColor;
}

function likeColor(){
    if(btnDislike.classList.contains('red')){
        btnDislike.classList.remove('red');
    }

    this.classList.toggle('green');
}

function dislikeColor(){
    if(btnLike.classList.contains('green')){
        btnLike.classList.remove('green');
    }

    this.classList.toggle('red');
}

/* --------------------------- Meeting 12 | Change Image Header ------------------------- */
function changeImage(element){
    element.setAttribute("src", "./assets/img-header2.png")
}

function changeImageBack(element){
    element.setAttribute("src", "./assets/img-header.png")
}

/* --------------------------- Meeting 12 | Change Text ------------------------- */
function changeText(element){
    element.innerHTML = "Pengembangan Game dan Website";
}

function changeTextBack(element){
    element.innerHTML = "Dapatkan Tips Programming Disini!";
}

/* --------------------------- Meeting 14 | Add and Closable Item ---------------- */
var myList = document.getElementsByTagName("li");
var i;
for(i=0; i<myList.length; i++){
    var span = document.createElement("span");
    span.innerHTML = "x";
    myList[i].appendChild(span).setAttribute("class", "close");
}

var close = document.getElementsByClassName("close");
var i;
for(i=0; i< close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none"
    }
}

function newElement(){
    //Create new list with the inputed value
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;

    //Check the inputed value
    if(inputValue === '' || inputValue === " "){
        alert("Data tidak boleh kosong");
    }

    else{
        document.getElementById("myUL").appendChild(li).setAttribute("class", "search-tags-item");
        li.innerHTML = inputValue;
    }

    //Clear Text on the search bar
    document.getElementById("myInput").value = "";

    //Create button close
    var span = document.createElement("SPAN");
    span.innerHTML = "x"
    li.appendChild(span).setAttribute("class", "close");

    //Delete List
    for(i=0; i< close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}

/* --------------------------- Meeting 4 | Image Slider ---------------- */
var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.slider-btn');

let currentSlide = 1;

var manualNav = function(manual){
    slides.forEach(function(slide){
        slide.classList.remove('active');

        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        manualNav(i);
        currentSlide = i;
    })
})

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = function(){
        setTimeout(function(){
            [...active].forEach(function(activeSlide){
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            buttons[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }

            if(i >= slides.length){
                return
            }

            repeater();
        }, 3000)
    }

    repeater();
}

repeat();

/* ----------------- Meeting 8 | AOS Library------------ */
var codingProjects = document.querySelectorAll('.project');

codingProjects.forEach((project, index)=> {
    project.dataset.aos = 'fade-down';

    project.dataset.aosDuration = 1500;
    project.dataset.aosDelay = index * 300;
})

AOS.init({
    once: true
});

/* ----------------- Meeting 9 | Modal------------ */
var btnSubmit = document.querySelector(".submit");
console.log(btnSubmit);
var modal = document.querySelector(".modal-container");
console.log(modal);

if(btnSubmit){
    btnSubmit.addEventListener('click', function(){
        modal.classList.add('show');
        console.log('test masuk')
        const next = document.querySelector('next');
        next.setAttribute('value', 'https://flourishing-capybara-93f6d0.netlify.app/contact.html')
    })
}

/* ----------------- Meeting 10 | Splash Screen------------ */

var splash = document.querySelector('.splash');

if(splash){
    document.addEventListener('DOMContentLoaded',function(event){
        setTimeout(function(){
            splash.style.display = "none"
        }, 3000)
    })
}

var animate = document.querySelector('.astronaut-takeoff');

if(animate){
    document.addEventListener('DOMContentLoaded', function(event){
        setTimeout(function(){
            animate.classList.add('animation')
        }, 400)
    })
}

var splashText= document.querySelector('.splash-text');

if(splashText){
    setTimeout(function(){
        splashText.innerHTML = "Come In!"
    }, 2000)
}