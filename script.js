let mnue = document.querySelector("#men-bar");
let navbar = document.querySelector(".navbar");

mnue.onclick = () =>{
    mnue.classList.toggle("icon-close");
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    mnue.classList.remove("icon-close");
    navbar.classList.remove("active");

}