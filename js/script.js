let button = document.querySelector(".button")
let body = document.querySelector(".body");
let theme = document.querySelector(".theme")
let header = document.querySelector(".headerDark")
button.addEventListener ("click", ()=>{
    body.classList.toggle("dark");
    theme.innerText = body.classList.contains("dark")
? "jasny":"ciemny";
})

