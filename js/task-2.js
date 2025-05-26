const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.querySelector("#ingredients")

const li = ingredients.map(ingredient => {
    const liEl = document.createElement("li")
    liEl.textContent = ingredient;
    return liEl
})

ingredientsList.append(li)