const celsius = document.getElementById('C');
const fahrenheit = document.getElementById('F');
const convertBtn = document.getElementById('convertBtn');
const input = document.getElementById('tempInput');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const toCelsius =  () => {
    const c = document.getElementById('tempInput').value;
    return (c * 9 / 5) + 32;
}

const toFahrenheit =  () => {
    const f = document.getElementById('tempInput').value;
    return (f - 32) * 5 / 9;
}

// const temperatureSelected = () => {
// // Get a reference to the button element in the DOM
// if (document.getElementById('C').checked === 'true') {
//     console.log(getElementById('tempInput').value)
//     console.log('C');
// } else if (document.getElementById('F' === 'true'))
// console.log(getElementById('tempInput').value)
// console.log('F');
// }


// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = () => {
    if (celsius.checked) {
        console.log(input.value);
        console.log('C');
        celsius.value = fahrenheit.value;
    }
    else if (fahrenheit.checked) {
        console.log(input.value);
        console.log('F');
        fahrenheit.value = celsius.value;
    }

}

const buttonClick = (e) => {
// Assign a function to be executed when the button is clicked
    const buttonId = e.target.id;
  if (buttonId === 'convertBtn') {
    determineConverter();
  }
}

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', buttonClick);
}

const init = () => {
    buttonEvents();
}
init();