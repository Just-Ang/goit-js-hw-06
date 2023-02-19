const inputEL = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

console.log(inputEL)
console.log(outputEl)




inputEL.addEventListener('input', (event) => {


    outputEl.textContent = event.currentTarget.value;
} )