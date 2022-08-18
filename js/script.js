// gloabl variables

let inputFocus = document.querySelector('input#name');
let selectJob = document.getElementById('title');
let selectColor = document.getElementById('color');
let designColor = document.querySelector('#shirt-colors');
let OtherJobRole = document.querySelector('input#other-job-role');
let selectDesign = document.querySelector('select[id=design]')
let otherJob = selectJob.options[6].value;


// adding focus on name input on load

window.addEventListener('load', (e) => {
    inputFocus.focus();
    OtherJobRole.style.display = "none";
    designColor.style.display = "none";
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

    designColor.style.display = "block"

    let selected = event.target.options[event.target.selectedIndex]
    let theme = selected.value

    // Getting all options on the array

    let options = Array.from(document.querySelectorAll('select[id=color]>option'))

    // Hide items that are not appart of the group
    
    options.forEach((element) => {

        if(element.getAttribute('data-theme') == theme){
            element.style.display = "block"
        } else if(element.getAttribute('data-theme') !== theme){
            element.style.display = "none"
        }

    });  
    
});






// Resources:
// https://stackoverflow.com/questions/54429553/how-to-show-hide-items-from-a-select-list-based-on-another-selection