const inputEl = document.querySelector('#validation-input');
console.log(inputEl)
const checkInput = (event) => {
    
   if (event.currentTarget.value.trim().length == inputEl.dataset.length) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');

   }
   else {
    event.currentTarget.classList.add('invalid')
    event.currentTarget.classList.remove('valid')
   }

   
    
};


inputEl.addEventListener('blur', checkInput);