// toggen spin classes on icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
};



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