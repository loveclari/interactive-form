// global variables

let inputFocus = document.querySelector('input#name');
let selectJob = document.getElementById('title');
let selectColor = document.getElementById('color');
let designColor = document.querySelector('#shirt-colors');
let OtherJobRole = document.querySelector('input#other-job-role');
let selectDesign = document.querySelector('select[id=design]')
let otherJob = selectJob.options[6].value;
let activities = document.forms['conferenceForm'].querySelectorAll('#activities');
let activityBox = document.getElementById('activities-box');
let activityBoxOptions = document.querySelectorAll('#activities-box');
let activityTotal = document.getElementById('activities-cost');
let payment = document.querySelector('#payment');
let paymentHideFirst = payment.options[0];


// adding focus on name input on load

window.addEventListener('load', () => {
    inputFocus.focus();
    OtherJobRole.style.display = "none";
    designColor.style.display = "none";
    paymentHideFirst.parentNode.removeChild(paymentHideFirst)
    
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

// create and event listener for the change in cost of course registration


activityBox.addEventListener('change', () => {

    let options = activityBox.querySelectorAll('input')

    activityTotal.dataset.cost = '';

    let total = 0;

    let html = "";

    // loop through the options 

    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
          total = total + parseInt(options[i].dataset.cost);
      }

    }

    // set the new total value

    activityTotal.dataset.cost = total;

    html += `<span>Total: $${total}<span>`

    activityTotal.innerHTML = html;

});


payment.addEventListener('click', () => {


});




// Resources:
// https://stackoverflow.com/questions/54429553/how-to-show-hide-items-from-a-select-list-based-on-another-selection