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
let activityBoxlabel = document.querySelectorAll("input[type=checkbox]");
let activityTotal = document.getElementById('activities-cost');
let payment = document.querySelector('#payment');
let creditcard = document.querySelector('#credit-card');
let paypal = document.querySelector('#paypal');
let bitcoin = document.querySelector('#bitcoin');
let paymentHideFirst = payment.options[0];
let submit = document.querySelector('[type=submit]');

let ccInput = document.getElementById('cc-num');
let emailInput = document.getElementById('email');
let zipInput = document.getElementById('zip');
let cvvInput = document.getElementById('cvv');


// adding focus on name input on load

window.addEventListener('load', () => {
    inputFocus.focus();
    OtherJobRole.style.display = "none";
    designColor.style.display = "none";
    paymentHideFirst.parentNode.removeChild(paymentHideFirst);
    paypal.style.display = "none";
    bitcoin.style.display = "none";
    
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

    designColor.style.display = "block";

    let selected = event.target.options[event.target.selectedIndex];
    let theme = selected.value;

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

// adding class for focus depending on event

let checkbox = Array.from(document.querySelectorAll('input[type=checkbox]'));


checkbox.forEach((checkbox) => {
    checkbox.addEventListener("focus", (event) => {
      event.target.parentElement.classList.add("focus");
    });
    checkbox.addEventListener("blur", (event) => {
      event.target.parentElement.classList.remove("focus");
    });
});

// create an event listener to show the user only the payment features he selected


payment.addEventListener('change', (event) => {

    let selected = event.target.options[event.target.selectedIndex]
    let selectedPayment = selected.value

    let paymentOptions = Array.from(document.querySelectorAll('[class=payment-options]>div'))

    paymentOptions.forEach((element) => {
        
        if(element.getAttribute('id') == selectedPayment){
            element.style.display = "block"
        } else if(element.getAttribute('id') !== selectedPayment){
            element.style.display = "none"
        }

    });  

});


// form validation

const nameValidation = (name) => {
    return /^[a-z]+$/.test(name);

}

const emailValidation = (email) => {
    return /^$|^.*@.*\..*$/.test(email);

}


const cvvValidation = (cvv) => {
    return /^[0-9]{3,4}$/.test(cvv)

}

const zipValidation = (zip) => {
    return /^[0-9]{5}$/.test(zip)

}

const ccValidation = (ccNum) => {
    return /^[0-9]{13,16}$/.test(ccNum)
}

// helper functions


function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    if (show) {
      element.style.display = "inherit";
    } else {
      element.style.display = "none";
    }
  }
  
  function createListener(validator) {
    return event => {
      const text = event.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = event.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  }


// adding event listeners for form validators

emailInput.addEventListener("input", createListener(emailValidation));

inputFocus.addEventListener("input", createListener(nameValidation));

cvvInput.addEventListener("input", createListener(cvvValidation));

zipInput.addEventListener("input", createListener(zipValidation));

ccInput.addEventListener("input", createListener(ccValidation));

// adding event listener to the form submit

submit.addEventListener('submit', (event) => {
    console.log(event.target);
})




// Resources:
// https://stackoverflow.com/questions/54429553/how-to-show-hide-items-from-a-select-list-based-on-another-selection
// https://cheatography.com/davechild/cheat-sheets/regular-expressions/
// https://stackoverflow.com/questions/71538996/get-id-of-child-elements
// http://www.madirish.net/11
// https://teamtreehouse.com/library/validating-a-username