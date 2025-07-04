// toggen spin classes on icon
document.querySelector(".toggle-settings").onclick = function () {
    document.querySelector(".settings-box").classList.toggle("open");
    document.querySelector(".toggle-settings i").classList.toggle("fa-spin");
};
// check if there is a local storage color
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", mainColor);
}
//switch colors 
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

    });
});

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