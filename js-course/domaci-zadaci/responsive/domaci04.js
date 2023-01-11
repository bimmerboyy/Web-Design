//Ovo je responsive menu

const mobileMenu = () => {
    let menu = document.querySelector(".header ul");
    let btn = document.querySelector(".header button");

    if (btn.innerText === 'MENU') {
        menu.style.display = "block";
        btn.innerText = "CLOSE";
    } else {
        menu.style.display = "none";
        btn.innerText = "MENU";

    }
}


//Ovo je galerija

let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");

let imgNum = 0;

//Pomjeramo slike u desno

const moveRight = () => {
        displayNone();
        imgNum++;


        if (imgNum === pictures.length) {
            imgNum = 0;
        }
        pictures[imgNum].style.display = "block";

    }
    //pomjeramo slike u lijevo
const moveLeft = () => {
    displayNone();

    imgNum--;
    if (imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = "block";
}

// Event listeneri za strelice 
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

//Ova funkcija ce da sakrije sve slike

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = "none";
    });
}

//Portfolio

const portfolioSort = (button) => {
    let category = button.getAttribute("data-category");
    let portfolioItems = document.querySelectorAll(".portfolio-single-item");

    portfolioItems.forEach((item) => {
        item.style.display = "none";
    });
    if (category === "sve") {
        portfolioItems.forEach((item) => {
            item.style.display = "block";
        });
    }

    portfolioItems.forEach((item) => {
        console.log(item.getAttribute("data-category"));
        if (item.getAttribute("data-category").includes(category)) {
            item.style.display = "block";
        }
    });
}

//Otvaramo modal

const openModal = () => {
    let modalWindow = document.querySelector(".popup-modal");
    let overlay = document.querySelector(".overlay");
    modalWindow.style.display = "block";
    overlay.style.display = "block";
}

//Zatvaramo modal
const closeModal = () => {
    let modalWindow = document.querySelector(".popup-modal");
    let overlay = document.querySelector(".overlay");
    modalWindow.style.display = "none";
    overlay.style.display = "none";

}