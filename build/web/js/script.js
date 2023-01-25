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

function scrollToAlmostTop() {
    setTimeout(function () {
        window.scrollTo({
            top: 2,
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
    if (flag) {
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
        let newCard = document.createElement("div"); // create new card
        newCard.classList.add("card"); // add class
        newCard.innerHTML = item.innerHTML; // copy main body

        // add a select button
        let newCardTitle = newCard.firstElementChild; // get the title element
        let selectDiv = document.createElement("div"); // create new element
        selectDiv.classList.add("select"); // add select class
        newCardTitle.prepend(selectDiv); // prepend: add as the first child

        // add the pledge amount section
        let pledgeDiv = document.querySelector("body>.template>.pledge-amount"); // get pledge template
        pledgeDiv.children[1].children[0].setAttribute("data-min", item.getAttribute("data-min"));
        pledgeDiv.children[1].children[3].setAttribute("value", item.getAttribute("data-rewardID"));
        let selectDiv1 = document.createElement("div"); // create new element
        selectDiv1.classList.add("pledge-amount"); // add pledge class
        selectDiv1.innerHTML = pledgeDiv.innerHTML; // copy main body from template
        newCard.appendChild(selectDiv1); // add to the end of the new card

        projectSelectCards.appendChild(newCard); //add new card to the end of the card container
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
moneyInputs.forEach(item => {
    item.addEventListener('input', () => {
        if (item.value.charAt(0) != '$') {
            item.value = "$" + item.value;
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

const formSubmitButton = document.querySelectorAll(".pledge-amount form .submit");
formSubmitButton.forEach(item => {
    item.addEventListener('click', () => {
        validateNumberInput(item.parentNode.children[0]);
    })
})

function openFinishScreen() {
    scrollToAlmostTop();
    finishSection.classList.add("active");
    // closeMainFloat();
    flag = false;
    toggleBlurScreen(true);
}

closeFinish.addEventListener('click', () => {
    flag = true;
    finishSection.classList.remove("active");
    toggleBlurScreen(false);
})

// update data-id
const mainBackprojectButtons = document.querySelectorAll("body>main>#about-card>.card-container .card>.card-functions>button");
for (let i = 0; i < mainBackprojectButtons.length; i++) {
    mainBackprojectButtons[i].setAttribute("data-id", i + 1);
}

// validate inputs
const numberInput = document.querySelectorAll(".money-input");
numberInput.forEach(item => {
    item.addEventListener('blur', () => {
        validateNumberInput(item);
    })
})

const validateNumberInput = (item) => {
    if (item.value == "") {
        item.classList.add("error");
        return false;
    } else if (item.value.slice(1, item.value.length) < parseInt(item.getAttribute("data-min"))) {
        item.classList.add("error");
        return false;
    } else {
        item.classList.remove("error")
        return true;
    }
}

// submit card
const validate = (obj) => {
    return validateNumberInput(obj.children[0]);
}