const navButtons = document.querySelectorAll(".hamburger");

function scrollToTop() {
    setTimeout(function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, 200);
}

navButtons.forEach(item => {
    item.addEventListener('click', () => {
        toggleNav();
    })
})

var flag = true;
const toggleNav = () => {
    if(flag) {
        navButtons.forEach(item => {
            item.classList.toggle("active");
        })
        document.querySelector(".nav-buttons").classList.toggle("active");
        if (document.querySelector(".nav-buttons").classList.contains("active")) {
            toggleBlurScreen(true);
        } else {
            toggleBlurScreen(false);
        }
    }
}

// Card disabled
const numbers = document.querySelectorAll("#about-card .card-container .card .card-functions .number");
numbers.forEach(item => {
    if (item.innerHTML == "0") {
        item.parentNode.parentNode.classList.add("disabled");
        item.nextElementSibling.innerHTML = "Out of Stock";
    } else {
        item.parentNode.parentNode.classList.remove("disabled");
        item.nextElementSibling.innerHTML = "Select Reward";
    }
})
const checkLeft = () => {
    document.querySelectorAll("#project-select .card .card-functions .number").forEach(item => {
        if (item.innerHTML == "0") {
            item.parentNode.parentNode.classList.add("disabled");
        } else {
            item.parentNode.parentNode.classList.remove("disabled");
        }
    })
}

const isBlurScreen = () => {
    return document.querySelector("header").classList.contains("blur");
}

// blur screen
const toggleBlurScreen = (value) => {
    if (value)
        document.querySelector("header").classList.add("blur");
    else
        document.querySelector("header").classList.remove("blur");

}

// bookmark button functionality
const bookmarkButton = document.querySelector("#bookmark");
bookmarkButton.addEventListener('click', () => {
    bookmarkButton.classList.toggle("toggle");
})

// copy cards from body to float
const cards = document.querySelectorAll("main #about-card .card-container .card");
const projectSelectCards = document.querySelector("#float>#project-select");
const copyCards = () => {
    cards.forEach(item => {
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML = item.innerHTML;

        let newCardTitle = newCard.firstElementChild;
        let selectDiv = document.createElement("div");
        selectDiv.classList.add("select");

        let pledgeDiv = document.querySelector("body>.template>.pledge-amount");
        let selectDiv1 = document.createElement("div");
        selectDiv1.classList.add("pledge-amount");
        selectDiv1.innerHTML = pledgeDiv.innerHTML;

        newCardTitle.prepend(selectDiv);
        newCard.appendChild(selectDiv1);

        projectSelectCards.appendChild(newCard);
    });
    checkLeft();
}
copyCards();

// selectbox functionality
const selectBoxes = document.querySelectorAll("#project-select .card .title .select");
const floatCards = document.querySelectorAll("#project-select .card");
const titleSelectBoxes = document.querySelectorAll("#project-select .card .title .card-title");
selectBoxes.forEach(item => {
    item.addEventListener('click', () => {
        toggleSelect(item);
    })
})
titleSelectBoxes.forEach(item => {
    item.addEventListener('click', () => {
        toggleSelect(item.previousElementSibling);
    })
})
const toggleSelect = (item) => {
    if (!item.parentNode.parentNode.classList.contains("disabled")) {
        selectBoxes.forEach(item1 => item1.classList.remove("toggled"));
        item.classList.add("toggled");
        toggleCard(item.parentNode.parentNode);
    }
}
const toggleCard = (item) => {
    floatCards.forEach(item => item.classList.remove("active"));
    item.classList.add("active");
}

// open main float
const mainFloat = document.querySelector("#project-select");
const openMainFloat = (id) => {
    flag = false;
    scrollToTop();
    mainFloat.classList.add("active");
    toggleBlurScreen(true);
    if (id != -1) {
        toggleSelect(selectBoxes[id]);
    }
}
const closeMainFloat = () => {
    flag = true;
    mainFloat.classList.remove("active");
    toggleBlurScreen(false);
}

document.querySelector("#project-select .close").addEventListener('click', () => {
    closeMainFloat();
})

const floatButtons = document.querySelectorAll("body>main .backproject,body>header .backproject");
floatButtons.forEach(item => {
    if (!item.parentNode.parentNode.classList.contains("disabled"))
        item.addEventListener('click', () => {
            openMainFloat(item.getAttribute("data-id"));
        })
})

// money input
const moneyInputs = document.querySelectorAll("input.money-input");
console.log(moneyInputs);
moneyInputs.forEach(item => {
    item.addEventListener('input', () => {
        if (item.value.charAt(0) != '$') {
            item.value = "$" + item.value;
            console.log(item.value);
        }
        let regex = /^\$\d+$/;
        if (!regex.test(item.value) || item.value.length > 6) {
            item.value = item.value.slice(0, -1);
        }
    })
})

// finished functions
const finishSection = document.querySelector("#finished");
const closeFinish = document.querySelector("#finished button");

const openFinish = document.querySelectorAll(".pledge-amount form .submit");
openFinish.forEach(item => {
    item.addEventListener('click', () => {
        scrollToTop();
        finishSection.classList.add("active");
        closeMainFloat();
        flag = false;
        toggleBlurScreen(true);
    })
})

closeFinish.addEventListener('click', () => {
    flag = true;
    finishSection.classList.remove("active");
    toggleBlurScreen(false);
})
