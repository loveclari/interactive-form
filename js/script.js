// gloabl variables

let inputFocus = document.querySelector('input#name');
let selectJob = document.getElementById('title');
let selectDesign = document.getElementById('design');
let designColor = document.querySelector('#shirt-colors');
let OtherJobRole = document.querySelector('input#other-job-role');
let jsPuns = document.querySelector('[data-theme="js puns"]');

console.log(jsPuns)
let otherJob = selectJob.options[6].value;

console.log(otherJob)

// adding focus on name input on load

window.addEventListener('load', (e) => {
    inputFocus.focus();
    OtherJobRole.style.display = "none"
    designColor.style.display = "none"
});

// prevent submit from loading the page

document.getElementById('conferenceForm').addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
    e.preventDefault();
    }
});

// show job input based on select

selectJob.addEventListener('change', (event) => {
    if(event.target.value === 'other'){
        OtherJobRole.style.display = "block"
      } else if(event.target.value !== 'other'){
        OtherJobRole.style.display = "none"
      }
    
});

selectDesign.addEventListener('change', (event) => {
    if(event.target === selectDesign){
        designColor.style.display = "block"
      } else if(event.target.value !== 'other'){
        designColor.style.display = "none"
      } 
    
});


