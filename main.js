const celsius = document.getElementById('C');
const fahrenheit = document.getElementById('F');
const convertBtn = document.getElementById('convertBtn');
const input = document.getElementById('tempInput');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const domStringBuilder = (finalTemp, unit) => {
    let domString = '';
        domString = `<h2>${finalTemp}</h2> degrees <h2>${unit}</h2>`;
 printToDom('tempOutput',domString );

}

const toCelsius =  () => {
    let temperatureInput = input.value;
    const c = Math.round((temperatureInput * 9 / 5) + 32);
    console.log(c);
    domStringBuilder(c, 'C')
}

const toFahrenheit =  () => {
    let temperatureInput = input.value;
    const f = Math.round((temperatureInput - 32) * 5 / 9);
    domStringBuilder(f, 'F');
}


// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = () => {
    if (celsius.checked) {
        // console.log(input.value);
        // console.log('C');
        // celsius.value = fahrenheit.value;
        toCelsius();
    }
    else if (fahrenheit.checked) {
        // console.log(input.value);
        // console.log('F');
        fahrenheit.value = celsius.value;
        toFahrenheit();
    }

}

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
}

const init = () => {
    buttonEvents();
}
init();
