//adding focus on name input on load

let inputFocus = document.querySelector("input#name");
window.addEventListener('load', (e) =>{
    inputFocus.focus();
})