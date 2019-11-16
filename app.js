let cheese = 0;
let cheeseCountElem = document.querySelector("#cheese-count");
let pickaxeElem = document.querySelector("#pickaxe");

let clickUpgrades = {
  pickaxes: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  cart: {
    price: 25,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};

//for click multiplier: use for (variable in object) to do this

function mine() {
  cheese++;
  clickUpgrades.pickaxes.quantity;
  cheese += clickUpgrades.pickaxes.multiplier * clickUpgrades.pickaxes.quantity;
  update();
}

//use for in loop to iterate over upgrades

function update() {
  cheeseCountElem.innerHTML = cheese;
  pickaxeElem.innerHTML = clickUpgrades.pickaxes.quantity;
}

function BuyPickaxe() {
  //checks if the user has the resources to purchase and if so increase the pickaxe count and decrease cheese resources by appropriate amt; use console.log to test it's working--once working add count to page to user knows how many they have
  if (cheese >= clickUpgrades.pickaxes.price) {
    clickUpgrades.pickaxes.quantity++;
    cheese -= clickUpgrades.pickaxes.price;
    console.log(clickUpgrades.pickaxes.quantity);
    console.log(cheese);
  }
  update();
}

function collectAutoUpgrades() {
  //iterate over autoUpgrades, total quantity of each autoUpgrade times multiplier, then add that value to cheese resource
  //setInterval to make sure this occurs every 3 seconds automatically and don't forget to invoke it
}

update();
