const itemsEl = document.querySelectorAll(".item")
console.log(`У списку ${itemsEl.length} категорії.`);

itemsEl.forEach(item => {
    const titleText = item.querySelector("h2").textContent
    const itemsNumber = item.querySelectorAll("ul li").length
    console.log(`Категорія: ${titleText}`);
    console.log(`Кількість елементів: ${itemsNumber}`);
})