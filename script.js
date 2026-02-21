const text = "Hey... I Made This Just For You 💜";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.querySelector(".typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;

function scrollToSection() {
    document.querySelector(".about").scrollIntoView({behavior: "smooth"});
}

function reveal() {
    document.getElementById("secret").innerHTML = 
    "You make ordinary days feel extraordinary. And maybe... I like you more than I planned to. 💫";
}

function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
