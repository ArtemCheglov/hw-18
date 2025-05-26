let value = 0;

const valueEl = document.querySelector("#value")
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

function decrement() {
    value -= 1;
    valueEl.textContent = value
}

function increment() {
    value += 1;
    valueEl.textContent = value
}

decrementBtn.addEventListener("click", decrement)
incrementBtn.addEventListener("click", increment)