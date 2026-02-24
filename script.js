//add favorite button to each card
let cards = document.querySelectorAll(".card");
cards.forEach((cards) => {
  //new button
  let newButton = document.createElement("button");
  //button text
  newButton.textContent = "Add to favorites";
  //give button class to reference later
  newButton.classList.add("fav-button");
  //append
  cards.appendChild(newButton);
});

//create favorites section at bottom of page

let favorite_items = document.createElement("article");
let fav_head = document.createElement("h3");
let body = document.querySelector("body");
fav_head.textContent = "Favorite items";
favorite_items.appendChild(fav_head);
//body.classList.add("main_body");
body.insertBefore(favorite_items, document.querySelector("footer"));

//add to favorites
let favButtons = document.querySelectorAll(".fav-button");
let fav_remove = function (event) {
  //event.currentTarget.remove();
  event.currentTarget.parentElement.remove();
  console.log("clicked remove button");
};
let favoritize = function () {
  // add element to favorites by card id
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  let newH = document.createElement("h5");
  newH.textContent = event.currentTarget.parentElement.id;
  newCard.appendChild(newH);
  let remFavButton = document.createElement("button");
  remFavButton.textContent = "Remove from Favorites";
  remFavButton.addEventListener("click", fav_remove);
  newCard.appendChild(remFavButton);
  //console.log(event.currentTarget.parentElement.id);
  favorite_items.appendChild(newCard);
};
favButtons.forEach((favButtons) => {
  favButtons.addEventListener("click", favoritize);
});
