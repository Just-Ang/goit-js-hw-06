function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEL = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let size = 30;

  amount = controlsEL.value;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    // console.log(div);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    size += 10;

    boxesEl.append(div);
  }
};

createBtnEl.addEventListener("click", createBoxes);

destroyBtnEl.addEventListener("click", () => {
  controlsEL.value = "";
  boxesEl.innerHTML = "";
});
