let nav = document.querySelector(".nav")
let welcomePage = document.querySelector(".welcome-page")
let welcomeText = document.querySelector(".welcome-text")
let imgSlide = document.querySelector(".image-slide")
let img = document.querySelector("#img")
let bar = document.querySelector("#bar")
let imgArr = [
    "IMG-20230327-WA0040.jpg",
    "IMG-20230327-WA0041.jpg",

]
let arr = [
    "WELCOME",
    "TEDDY'S STORE",
    "No.1 Global Store"
]
function toggleMenu() {
   
    nav.classList.toggle("active")
}
let count = 0
function welcomeSlide() {
    
setInterval(() => {
    if (count < arr.length) {
        
    
        
        console.log(count)
    
        welcomeText.innerHTML = arr[count]
    }
    else{
      count = 0
      welcomeText.innerText = arr[count++]
    }
}, 1000);
}
welcomeSlide()

function imgSlideFunc() {


    setInterval(() => {

        if (count < imgArr.length) {
            
            img.src = imgArr[count++]
            console.log(count)
        } else {
            count = 0
            img.src = imgArr[count]
        }
     

   }, 1000);
}

imgSlideFunc()