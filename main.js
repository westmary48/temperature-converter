const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const toCelsius =  (tempInput) => {
const celsiusTemp = tempInput
const cToF = celsiusTemp * 9 / 5 + 32;
const answer = `${celsiusTemp} is ${cToF}`;
console.log(answer);
}

const toFahrenheit =  (tempInput) => {
    const farTemp = tempInput
    const fToC = (farTemp - 32) * 5 / 9;
    const answer = `${farTemp} is ${fToC}`;
    console.log(answer);
}
fToC(40);


// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
//     const x;
//     if (degree == "C") {
//       x = document.getElementById("C").value * 9 / 5 + 32;
//       document.getElementById("F").value = Math.round(x);
//     } else {
//       x = (document.getElementById("f").value -32) * 5 / 9;
//       document.getElementById("c").value = Math.round(x);
//     }
//   }
//   console.log("event", e);
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