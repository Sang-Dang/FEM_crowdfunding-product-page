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