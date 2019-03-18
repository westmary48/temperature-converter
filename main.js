const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const toCelsius =  (celsius) => {
    const fahrenheit = Math.round((celsius * (9/5)) + 32);;
console.log(fahrenheit);
}

const toFahrenheit =  (fahrenheit) => {
    const celsius = Math.round((fahrenheit - 32) * (5/9));
    console.log(celsius);
}

const temperatureSelected = () => {
// Get a reference to the button element in the DOM

document.getElementById("radioBtn");
   const valueTemp = temperatureSelected.options[temperatureSelected.selectedIndex].value;
   console.log(valueTemp);

// const button = document.getElementById("converter");

// document.getElementById("temp").value;

//    var result;

//    if (valueTemp == 1) {
//       result = celToFah(numberTemp);
//       document.getElementById("resultContainer").innerHTML = "= " + result + "°Fahrenheit";
//    } else {
//       result = fahToCel(numberTemp);
//       document.getElementById("resultContainer").innerHTML = "= " + result + "°Celsius";
//    }

// }

}

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {

}

const buttonClick = () => {
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
console.log(document.getElementById('tempInput').value);
}

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', buttonClick);

}

const init = () => {
    buttonEvents();
}