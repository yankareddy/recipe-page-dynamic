let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let headContainerElement = document.getElementById("headContainer");
let imageContainerEl = document.getElementById("imageContainer");
let ingredientsContainer = document.getElementById("ingredientsContainer");

headContainerElement.textContent = recipeObj.title;
imageContainerEl.src = recipeObj.imgSrc;

function onTodod(todo) {
    let listItemElement = document.createElement("li");
    listItemElement.textContent = todo;
    listItemElement.classList.add("list_item");
    ingredientsContainer.appendChild(listItemElement);
}

for (let todo of recipeObj.ingredients) {
    onTodod(todo);
}