const inputEl = document.querySelector('#validation-input');
console.log(inputEl)
const checkInput = (event) => {
    
    event.currentTarget.value.trim().length == inputEl.dataset.length ?
    event.currentTarget.classList.add('valid') :
    event.currentTarget.classList.add('invalid')
    
};


inputEl.addEventListener('blur', checkInput);