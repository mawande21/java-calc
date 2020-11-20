// select all the buttons
const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

// activate each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
// calculate function
function calculate(event) {
  // clicked buttons value
  const clickedButton = event.target.value;

  if (clickedButton === '=') {
    // only do the calculation when screen is empty
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } else if (clickedButton === 'C') {
    // clear the display
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButton;
  }
}
    
    