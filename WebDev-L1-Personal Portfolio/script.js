const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const navItems = document.querySelectorAll(".nav-link");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* TYPING EFFECT */

const typingText = document.getElementById("typing-text");

const roles = [

    "Software Developer",
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast"

];


let roleIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];


    if (isDeleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex--);

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex++);

    }


    let typingSpeed = isDeleting ? 70 : 120;


    if (!isDeleting && characterIndex === currentRole.length) {

        typingSpeed = 1500;

        isDeleting = true;

    }


    else if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        typingSpeed = 500;

    }


    setTimeout(typeEffect, typingSpeed);

}


typeEffect();


/* SCROLL REVEAL */

function revealOnScroll() {

    const reveals = document.querySelectorAll(".reveal");


    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ACTIVE NAVIGATION */

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;


        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");


        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all the fields.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";


});