const celsius = document.getElementById('C');
const fahrenheit = document.getElementById('F');
const convertBtn = document.getElementById('convertBtn');
const input = document.getElementById('tempInput');
const output = document.getElementById('tempOutput');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const domStringBuilder = (finalTemp, unit) => {
    let domString = '';
if (finalTemp > 90 && unit == "F" || finalTemp > 32 && unit == "C") {
    let domString = `<h2 class="red">${finalTemp} degrees ${unit}</h2>`
    printToDom("tempOutput", domString);
} else if (finalTemp < 32 && unit == "F" || finalTemp < 0 && unit == "C") {
    let domString = `<h2 class="blue">${finalTemp} degrees ${unit}</h2>`
    printToDom("tempOutput", domString);
} else if (32 < finalTemp < 90 && unit == "F" || 0 < finalTemp < 32 && unit == "C") {
    let domString = `<h2 class="green">${finalTemp} degrees ${unit}</h2>`
    printToDom("tempOutput", domString);
}
//         domString = `<h2>${finalTemp}</h2> degrees <h2>${unit}</h2>`;
//  printToDom('tempOutput',domString );
}

// }

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

const clearInput = () => {
    console.log('button was clicked');
    input.value = '';
    output.textContent = '';
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
    document.getElementById('clearBtn').addEventListener('click', clearInput);
}

const init = () => {
    buttonEvents();
}
init();
