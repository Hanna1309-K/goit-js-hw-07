const categories = document.querySelectorAll("#categories .item");

// 1. Кількість категорій
console.log(`Number of categories: ${categories.length}`);

// 2. Інформація про кожну категорію
categories.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const items = category.querySelectorAll("li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${items}`);
});
