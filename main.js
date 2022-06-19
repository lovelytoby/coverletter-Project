let letter = document.querySelector(".test")
let coverletter = document.querySelector(".coverletter")
let secondPic = document.querySelector(".vPic")
let firstPic = document.querySelector(".pic")

letter.addEventListener("click", function () {
    letter.style.animation = "thisIsIt 1s ease forwards"
    coverletter.style.animation ="coverLetterShowing 1s ease forwards"
})


// letter.addEventListener("click", function () {
//     if (coverletter.style.display === "none") {

//     coverletter.style.display = "block"}

//     else{
//         console.log("why is this not working?")
//         coverletter.style.display = "none"
//     }
// })

let anotherTest = document.querySelector(".personal")

firstPic.addEventListener("mouseover", function() {
    secondPic.style.animation = "hahaha 1s ease forwards";
})

firstPic.addEventListener("mouseout", function() {
    secondPic.style.animation = "nothing 1s ease forwards";
})
