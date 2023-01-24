const navButtons = document.querySelectorAll(".hamburger");

navButtons.forEach(item => {
    item.addEventListener('click', () => {
        toggleNav();
    })
})

const toggleNav = () => {
    navButtons.forEach(item => {
        item.classList.toggle("active");
    })
    document.querySelector(".nav-buttons").classList.toggle("active");
    toggleBlurScreen();
}

// Card disabled
const numbers = document.querySelectorAll("#about-card .card-container .card .card-functions .number");
numbers.forEach(item => {
    if(item.innerHTML == "0") {
        item.parentNode.parentNode.classList.add("disabled");
    } else {
        item.parentNode.parentNode.classList.remove("disabled");
    }
})

// blur screen
function toggleBlurScreen() {
    document.querySelector("header").classList.toggle("blur");
}

// bookmark button functionality
const bookmarkButton = document.querySelector("#bookmark");
bookmarkButton.addEventListener('click', () => {
    bookmarkButton.classList.toggle("toggle");
})