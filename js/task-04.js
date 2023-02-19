
const decrementEl = document.querySelector('[data-action="decrement"]');
console.log(decrementEl);

const valueEl = document.querySelector('#value');
console.log(valueEl);

const incrementEl = document.querySelector('[data-action="increment"]');
console.log(incrementEl)


const counter = {
    counterValue: 0,

    increment() {
        this.counterValue += 1;
    },

    decrement() {
        this.counterValue -= 1;
    }

}


const clickDecrement = () => {
   // console.log("Button was clicked");
   counter.decrement();
   // console.log(counter)
   valueEl.textContent = counter.counterValue;
  };

  const clickIncrement = () => {
   // console.log("Button was clicked");
    counter.increment();
    // console.log(counter);
    valueEl.textContent = counter.counterValue;
  };

decrementEl.addEventListener('click', clickDecrement);

incrementEl.addEventListener('click', clickIncrement);


