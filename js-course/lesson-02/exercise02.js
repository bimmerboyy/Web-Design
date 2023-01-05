// function testing(){
//     let linkovi = document.querySelectorAll(".glavni-div .inner-div span .moj-link");
//     console.log(linkovi[0].innerText);
// }

function testing() {
    // let link2 = document.querySelector(".drugi-link");
    // let link1 = link2.previousElementSibling;
    // let link3 = link2.nextElementSibling;

    let link = document.querySelector(".drugi-link");
    // console.log(link.closest("div"));
    let gl_div = document.querySelector(".glavni-div");

    gl_div.innerHTML = "<span>Klikni ovaj link: <a>Klik</a></span>"

    // link.setAttribute("href", "http://google.com/");
    // link.setAttribute("class", "plavo-dugme");
    // console.log(link.getAttribute("class"));
    // link.removeAttribute("data-test");

    // console.log(link1.innerText);

    // console.log(link2.innerText);
    // console.log(link3.innerText);
}