const inputEL = document.querySelector('#font-size-control');
console.log(inputEL)

const textEl = document.querySelector('#text');
console.log(textEl);



inputEL.addEventListener('input', (event) => {
   const size = event.currentTarget.value;
   console.log(size);
   
   textEl.style.fontSize = `${size}px`;

})


