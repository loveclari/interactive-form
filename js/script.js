// gloabl variables

let inputFocus = document.querySelector('input#name');
let selectJob = document.getElementById('title');
let selectDesign = document.getElementById('design');
let selectColor = document.getElementById('color');
let designColor = document.querySelector('#shirt-colors');
let OtherJobRole = document.querySelector('input#other-job-role');
// let jsPuns = document.querySelectorAll('[data-theme="js puns"]');
// let heartJs = document.querySelectorAll('[data-theme="heart js"]');

let otherJob = selectJob.options[6].value;
let jsPunstheme = selectDesign.options[1].value;
let heartJstheme = selectDesign.options[2].value;

console.log(jsPunstheme)
console.log(heartJstheme)

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
    let jsPuns = document.querySelectorAll('[data-theme="js puns"]');
    let heartJs = document.querySelectorAll('[data-theme="heart js"]');
    if ( event.target === jsPunstheme){
        jsPuns.style.display = "block";
      } else if( event.target === heartJstheme ){
        heartJs.style.display = "block";
      } 
      console.log(jsPuns)
      console.log(heartJs)
    
});


