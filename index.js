


const searchBar = document.querySelector(".search-bar-container");
const magnifier = document.querySelector(".magnifier");
const mic = document.querySelector(".mic-icon");
const input = document.querySelector(".input");

const audio = new Audio("assistant.mp3");

magnifier.addEventListener("click", () => {
    searchBar.classList.toggle("active");
});

mic.addEventListener("click", () => {
    audio.play();
});


input.addEventListener("keypress", (e) => {

    if (e.keyCode === 13) {
        location.href = 'https://www.google.com/search?q=' + input.value;

    }
})


window.addEventListener("load", () => {
    setTimeout(() => {
        searchBar.classList.add("active");
    }, 700);
})