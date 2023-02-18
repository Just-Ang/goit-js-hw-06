const categoriesEl = document.querySelector('ul#categories');
console.log('Number of categories: ' + categoriesEl.children.length);


const categories = document.querySelectorAll('li.item');

const categoryEl = categories.forEach(el => {
    const category = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;
    console.log(`Category: ${category}`)
    console.log(`Elements: ${elements}`)
});

