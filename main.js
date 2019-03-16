const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}


const toCelsius =  () => {

}

const toFahrenheit =  () => {

}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  console.log("event", e);
}

const buttonClick = () => {
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
}

// const buttonEvents = () => {
//     document.getElementById('cat').addEventListener('click', buttonClick);
//     document.getElementById('dog').addEventListener('click', buttonClick);
//     document.getElementById('dino').addEventListener('click', buttonClick);
//     document.getElementById('all').addEventListener('click', buttonClick);
// }

const init = () => {

}