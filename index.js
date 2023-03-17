


const searchBar = document.querySelector(".search-bar-container");
const magnifier = document.querySelector(".magnifier");
const mic = document.querySelector(".mic-icon");

magnifier.addEventListener("click", () => {
    searchBar.classList.toggle("active");
});

mic.addEventListener("click", () => {
    searchBar.classList.add("active");
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})