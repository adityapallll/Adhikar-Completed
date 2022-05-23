const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to scroll top

    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance

    AOS.init();

});

// Text Speech 

let read = document.getElementById("read");
// let animation = document.getElementById("animation");
let ICON1 = document.getElementById("ICON1");
let ICON2 = document.getElementById("ICON2");
let icon = document.getElementsByClassName("fas")[0].classList;

if ("speechSynthesis" in window) {
    let message = new SpeechSynthesisUtterance();
    let text = document.getElementById("text").textContent;
    message.text = text.replace(/(\r\n|\r|\n)/gm, " "); //remove line breaks

    //when reading ended
    message.onend = function (event) {
        icon_play();
    };

    //when reading started
    message.onstart = function (event) {
        icon_pause();
    };

    let icon_play = function () {
        // animation.style.display = "none";
        ICON1.style.display = "block";
        ICON2.style.display = "none";
    }
    let icon_pause = function () {
        // animation.style.display = "block";
        ICON1.style.display = "none";
        ICON2.style.display = "block";
    }

    window.onload = () => {
        ICON2.style.display = "none";
    }

    read.onclick = function (event) {
        if (speechSynthesis.speaking && !speechSynthesis.paused) {
            icon_play();
            speechSynthesis.pause();
        } else if (speechSynthesis.paused) {
            icon_pause();
            speechSynthesis.resume();
        } else {
            speechSynthesis.speak(message);
        }
    }
} else {

    alert("Sorry,Your browser does not support speech Synthesis API");
}

// Navbar

const navBar = document.querySelector(".navbar");
const navCenter = document.querySelector(".nav-center");

window.addEventListener("scroll", function () {
    var top = this.pageYOffset;
    if (top > 30) {
        navBar.classList.add("fixed");
        navCenter.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed");
        navCenter.classList.remove("fixed");
    }
});

// Navbar2

const body = document.querySelector("body");
const navbar2 = document.querySelector(".navbar2");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    navbar2.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar2.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar2.classList.add("sticky") : navbar2.classList.remove("sticky");
}

// Intro

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1.2, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.8, delay: 0.8 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".card", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// For colour Change In Intro

var i = 0;
function divchange() {
    var divtag = document.getElementById("intro");
    var bgcolor = ["#0080FF"];
    divtag.style.backgroundColor = bgcolor[i];
    i = (i + 1) % bgcolor.length;
}
setInterval(divchange, 3000);

// Go Top BTN

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".goTop").fadeIn();
        }
        else {
            $(".goTop").fadeOut();
        }
    });

    $(".goTop").click(function () { scroll(0, 0) });
});

