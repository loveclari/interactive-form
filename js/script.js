// gloabl variables

let inputFocus = document.querySelector('input#name');
let select = document.getElementById('title');
let OtherJobRole = document.querySelector('input#other-job-role');
let otherJob = select.options[6].value;

console.log(otherJob)

// adding focus on name input on load

window.addEventListener('load', (e) => {
    inputFocus.focus();
    OtherJobRole.style.display = "none"
})

// show job input based on select

select.addEventListener('change', (event) => {
    if(event.target.value === 'other'){
        OtherJobRole.style.display = "block"
      } else if(event.target.value !== 'other'){
            OtherJobRole.style.display = "none"
      }
    
})


