const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const button = document.getElementById("toggledark")

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon")
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = "white"
        body.style.color = "black"
        body.style.transition = "1s"
        button.style.color = "black"
    }else{
        body.style.background = "#2d2d2d"
        body.style.color ="white"
        button.style.color = "white"
        body.style.transition = "1s"
    }

})
