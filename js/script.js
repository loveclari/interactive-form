///// global variables

let selectJob = document.getElementById('title');
let selectColor = document.getElementById('color');
let designColor = document.querySelector('#color');
let OtherJobRole = document.querySelector('input#other-job-role');
let selectDesign = document.querySelector('select[id=design]')
let otherJob = selectJob.options[6].value;
let activities = document.forms['conferenceForm'].querySelectorAll('#activities');
let validForm = document.querySelectorAll('label[class]');
let activityBox = document.getElementById('activities-box');
let activityBoxOptions = document.querySelectorAll('#activities-box');
let activityBoxlabel = document.querySelectorAll("input[type=checkbox]");
let activityTotal = document.getElementById('activities-cost');
let payment = document.querySelector('#payment');
let creditcard = document.querySelector('#credit-card');
let paypal = document.querySelector('#paypal');
let bitcoin = document.querySelector('#bitcoin');
let paymentHideFirst = payment.options[0];
let submit = document.querySelector('button[type=submit]');


let nameInput = document.querySelector('input#name');
let ccInput = document.getElementById('cc-num');
let emailInput = document.getElementById('email');
let zipInput = document.getElementById('zip');
let cvvInput = document.getElementById('cvv');
let hint = document.getElementById('name-hint');


///// adding focus on name input on load

window.addEventListener('load', () => {
    nameInput.focus();
    OtherJobRole.style.display = "none";
    designColor.classList.add('disabled')
    paymentHideFirst.parentNode.removeChild(paymentHideFirst);
    paypal.style.display = "none";
    bitcoin.style.display = "none";
    
});



///// prevent submit from loading the page

document.getElementById('conferenceForm').addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
    e.preventDefault();
    } 
});



///// show job input based on select

selectJob.addEventListener('change', (event) => {
    if(event.target.value === 'other'){
        OtherJobRole.style.display = "block"
      } else if(event.target.value !== 'other'){
        OtherJobRole.style.display = "none"
      }
    
});



///// select and show the design  color based on selection of design theme


selectDesign.addEventListener('change', (event) => {

    designColor.classList.remove('disabled')

    let selected = event.target.options[event.target.selectedIndex];
    let theme = selected.value;

    // Getting all options on the array

    let options = Array.from(document.querySelectorAll('select[id=color]>option'))

    // Hide items that are not appart of the group
    
    options.forEach((element) => {
        if(element.getAttribute('data-theme') == theme){
            element.style.display = "block"
            options.selected = true;
        } else if(element.getAttribute('data-theme') !== theme){
            element.style.display = "none"
            options.selected = false;
        }

    });  
    
});



// create and event listener for the change in cost of course registration


activityBox.addEventListener('change', (event) => {

    let options = activityBox.querySelectorAll('input')
    let checkedBoxDateTime = event.target.getAttribute('data-day-and-time')
 
    activityTotal.dataset.cost = '';

    let total = 0;

    let html = "";


    // loop through the options 

    for (let i = 0; i < options.length; i++) {
       
      if (options[i].checked) {
          total = total + parseInt(options[i].dataset.cost);
      }

      if (options[i].getAttribute('data-day-and-time') === checkedBoxDateTime ) {
          options[i].disabled = true
          options[i].parentNode.classList.add('disabled')
      } else if (options[i].getAttribute('data-day-and-time') !== checkedBoxDateTime) { 
          options[i].checked.disabled = false
          options[i].parentNode.classList.remove('disabled')

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
      event.target.parentNode.classList.add("focus");
    });
    checkbox.addEventListener("blur", (event) => {
      event.target.parentNode.classList.remove("focus");
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

const nameValidation = () => {
    let nameRegex = /^[a-zA-Z]+\s?[a-zA-Z]+$/.test(nameInput.value);
    let checknumbers = /^[0-9]+$/.test(nameInput.value)

    if (nameInput.value && nameRegex) {
        return nameInput.parentNode.className = "valid";

    } else if (nameInput) { 
        nameInput.parentNode.className = "not-valid";

    } else return false; 

    if (nameInput.value && checknumbers) {
        hint.innerHTML = "Name cannot be numbers"
    }
}
    
const emailValidation = () => {
   let emailRegex = /^$|^.*@.*\..*$/.test(emailInput.value);

    if (emailInput.value && emailRegex) {
        return emailInput.parentNode.className = "valid";
        
    } 
    else if (emailInput) { 
       emailInput.parentNode.className = "not-valid";

    } else return false;   
}


const cvvValidation = () => {
    let cvvRegex = /^[0-9]{3,4}$/.test(cvvInput.value)

    if (cvvInput.value && cvvRegex) {
        cvvInput.parentNode.className = "valid";
    
    } else if (cvvInput) { 
         cvvInput.parentNode.className = "not-valid";

    } else return false;
}

const zipValidation = () => {
    let zipRegex = /^[0-9]{5}$/.test(zipInput.value)

    if (zipInput.value && zipRegex) {
        return zipInput.parentNode.className = "valid";
       
    } else if (zipInput) { 
        zipInput.parentNode.className = "not-valid";
    
    } else return false
}

const ccValidation = () => {
    let ccRegex =  /^[0-9]{13,16}$/.test(ccInput.value)

    if (ccInput.value && ccRegex) {
        return ccInput.parentNode.className = "valid";

    } else if (ccInput){ 
        ccInput.parentNode.className = "not-valid";
    
    } else return false
}

// helper functions
// show element when show is true, hide when false

const showHideHint = (show, element) => {
    if (show) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
}
  
const createListener = (validator) => {
    return event => {
      const text = event.target.value;
      const valid = validator(text);
      const showHint = text !== "" && !valid;
      const toolHint = event.target.nextElementSibling;
      showHideHint(showHint, toolHint);
    };
}

// scroll to top function

const scrollToFirstInvalidControl = () => {
    const firstInvalidControl = document.querySelector("form#conferenceForm");
    firstInvalidControl.focus();  
}

 


// adding event listeners for form validators

nameInput.addEventListener("keyup", createListener(nameValidation));

emailInput.addEventListener("keyup", createListener(emailValidation));

cvvInput.addEventListener("input", createListener(cvvValidation));

zipInput.addEventListener("input", createListener(zipValidation));

ccInput.addEventListener("input", createListener(ccValidation));



// adding event listener to the form submit

submit.addEventListener('click', (event) => {

    event.preventDefault();

    // trying to make the form scroll to the location where the validation showing !valid

    if( validForm.value === "not-valid"){
        scrollToFirstInvalidControl()
        console.log('hello', scrollToFirstInvalidControl())
    }

    // list of validation functions

    if (!nameValidation()) {
      console.log('Invalid name prevented submission');
    
    }

    if (!emailValidation()) {
      console.log('Invalid email prevented submission');
    }

    if (!ccValidation()) {
      console.log('Invalid credit card prevented submission');
    }

    if (!zipValidation()) {
        console.log('Invalid zipcode prevented submission');
    }

    if (!cvvValidation()) {
        console.log('Invalid cvv prevented submission');
    }
  
});





// Resources:
// https://stackoverflow.com/questions/54429553/how-to-show-hide-items-from-a-select-list-based-on-another-selection
// https://cheatography.com/davechild/cheat-sheets/regular-expressions/
// https://stackoverflow.com/questions/71538996/get-id-of-child-elements
// http://www.madirish.net/11
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
// https://teamtreehouse.com/library/validating-a-username
// https://teamtreehouse.com/library/fsjs-project-warm-up-input-validation-error-indications
// https://medium.com/javascript-everyday/how-to-scroll-to-first-invalid-control-once-a-form-has-been-submitted-eb47d9fbc6e