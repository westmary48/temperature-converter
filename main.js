const celsius = document.getElementById('C');
const fahrenheit = document.getElementById('F');
const convertBtn = document.getElementById('convertBtn');
const input = document.getElementById('tempInput');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const toCelsius =  (temp) => {
    const c = ((temp * 9 / 5) + 32);
    domStringBuilder(c, 'C')
}

const toFahrenheit =  (temp) => {
    const f = ((temp - 32) * 5 / 9);
    domStringBuilder(f, 'F');
}

const domStringBuilder = (finalTemp, unit) => {
    let domString = '';
        domString = `<h3>${finalTemp} degrees ${unit}</h3>`
 printToDom('tempOutput',domString );

}


// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (temp) => {
    if (celsius.checked) {
        toFahrenheit(temp);
        console.log('C');
        printToDom('tempOutput', input.value)
    }
    else if (fahrenheit.checked) {
        toCelsius(temp);
        printToDom('tempOutput', input.value)
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