const itemsEl = document.querySelectorAll(".item");
const titleText = item.querySelector("h2").textContent;
const itemsNumber = item.querySelectorAll("ul > li").length;
console.log(`У списку ${itemsEl.length} категорії.`);

itemsEl.forEach(item => {
    console.log(`Категорія: ${titleText}`);
    console.log(`Кількість елементів: ${itemsNumber}`);
})