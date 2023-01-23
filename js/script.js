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
}

// Card disabled
const numbers = document.querySelectorAll("#about-card .card-container .card .number");
numbers.forEach(item => {
    if(item.innerHTML == "0") {
        item.parentNode.classList.add("disabled");
    } else {
        item.parentNode.classList.remove("disabled");
    }
})