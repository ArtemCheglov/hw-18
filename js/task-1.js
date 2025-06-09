const itemsEl = document.querySelectorAll(".item");
const titleText = document.querySelector("h2").textContent;
const itemsNumber = document.querySelectorAll("ul > li").length;
console.log(`У списку ${itemsEl.length} категорії.`);

itemsEl.forEach(item => {
    console.log(`Категорія: ${titleText}`);
    console.log(`Кількість елементів: ${itemsNumber}`);
})