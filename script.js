/*====================================
OGTA PREMIUM BOUTIQUE
script.js
====================================*/

/*==============================
LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 800);

});

/*==============================
HEADER SCROLL
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");

});

/*==============================
TUTUP MENU SAAT KLIK LINK
==============================*/

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.classList.remove("active");

    });

});

/*==============================
SCROLL REVEAL
==============================*/

const reveals = document.querySelectorAll(

".hero-content,.hero-image,.card,.about-text,.about-image,.gallery-grid img"

);

function revealScroll(){

    const windowHeight = window.innerHeight;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight-100){

            item.classList.add("active");

        }

    });

}

reveals.forEach(el=>{

    el.classList.add("reveal");

});

window.addEventListener("scroll",revealScroll);

window.addEventListener("load",revealScroll);

/*==============================
SMOOTH BUTTON EFFECT
==============================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="";

    });

});

/*==============================
GALLERY HOVER
==============================*/

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="translateY(-8px) scale(1.04)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="";

    });

});/*====================================
ACTIVE MENU ON SCROLL
====================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("current");

        }

    });

});

/*====================================
SCROLL TO TOP
====================================*/

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTop";

document.body.appendChild(scrollBtn);

Object.assign(scrollBtn.style, {

    position: "fixed",

    right: "25px",

    bottom: "25px",

    width: "50px",

    height: "50px",

    borderRadius: "50%",

    border: "none",

    background: "#111",

    color: "#fff",

    fontSize: "20px",

    cursor: "pointer",

    opacity: "0",

    transition: ".4s",

    zIndex: "999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.opacity = "1";

    } else {

        scrollBtn.style.opacity = "0";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*====================================
HERO FLOATING
====================================*/

const heroImg = document.querySelector(".hero-image img");

if (heroImg) {

    let float = 0;

    setInterval(() => {

        float = float === 0 ? 10 : 0;

        heroImg.style.transform =
            `translateY(${float}px)`;

    }, 2200);

}

/*====================================
CARD HOVER EFFECT
====================================*/

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.boxShadow =
            "0 35px 70px rgba(0,0,0,.18)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});

/*====================================
PRELOAD IMAGE
====================================*/

[
"Ogta111.png",
"Ogta222.png",
"Ogta333.png",
"Ogta444.png",
"Ogta555.png",
"Ogta666.png",
"Ogta777.png",
"Ogta888.png"

].forEach(src => {

    const img = new Image();

    img.src = src;

});