const categoriesNumberEL = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesNumberEL.length}`);

categoriesNumberEL.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
