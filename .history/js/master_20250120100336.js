// toggen spin classes on icon
document.querySelector(".toggle-settings").onclick = function () {
    document.querySelector(".settings-box").classList.toggle("open");
    document.querySelector(".toggle-settings i").classList.toggle("fa-spin");
};
// check if there is a local storage color
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color-option"));
}
//switch colors 
// loop in all colors list items
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        // set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        // set color on local storage
        localStorage.setItem("color-option", e.target.dataset.color);
        // remove active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        });
    });
});

// add active class on self
//e.target.classList.add("active");

// Select landing page element
let landingPage = document.querySelector(".landing-page");

// Get array of images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
// set interval for random background image
setInterval(() => {
    // Get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // Change background image url
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
}, 1500);