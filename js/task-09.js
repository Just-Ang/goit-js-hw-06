function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
console.log(bodyEl)

const buttonEl = document.querySelector('.change-color');
console.log(buttonEl)


const colorEl = document.querySelector('.color')




const changeColor = () => {
  console.log('changed')

  bodyEl.style.backgroundColor = getRandomHexColor();
  console.log(bodyEl.style.backgroundColor)

  colorEl.textContent = bodyEl.style.backgroundColor;

}

buttonEl.addEventListener('click', changeColor);
