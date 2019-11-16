let plasticity = 0;
let plasticityAmtElem = document.querySelector("#plasticity-amt");
let showerElem = document.querySelector("#shower");
let quitFbElem = document.querySelector("#quit-fb");
let summonYogiElem = document.querySelector("#yogi");
let submersionCbdElem = document.querySelector("#cbd-oil");

let clickUpgrades = {
  showerThink: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  quitFb: {
    price: 15,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  yogi: {
    price: 20,
    quantity: 0,
    multiplier: 20
  },
  cbdOil: {
    price: 25,
    quantity: 0,
    multiplier: 10
  }
};

//for click multiplier: use for (variable in object) to do this

function sleep() {
  plasticity++;
  clickUpgrades.showerThink.quantity;
  plasticity +=
    clickUpgrades.showerThink.multiplier * clickUpgrades.showerThink.quantity;
  plasticity += clickUpgrades.quitFb.multiplier * clickUpgrades.quitFb.quantity;
  update();
}

function update() {
  plasticityAmtElem.innerHTML = plasticity;
  showerElem.innerHTML = clickUpgrades.showerThink.quantity;
  quitFbElem.innerHTML = clickUpgrades.quitFb.quantity;
  summonYogiElem.innerHTML = automaticUpgrades.yogi.quantity;
  submersionCbdElem.innerHTML = automaticUpgrades.cbdOil.quantity;
}

//use for in loop to iterate over upgrades

// function collectClickUpgrades() {}

function showerThink() {
  if (plasticity >= clickUpgrades.showerThink.price) {
    clickUpgrades.showerThink.quantity++;
    plasticity -= clickUpgrades.showerThink.price;
    console.log("shower think: " + plasticity);
  }
  update();
}

function quitFb() {
  if (plasticity >= clickUpgrades.quitFb.price) {
    clickUpgrades.quitFb.quantity++;
    plasticity -= clickUpgrades.quitFb.price;
    console.log("quit fb: " + plasticity);
  }
  update();
}

function summonYogi() {
  if (plasticity >= automaticUpgrades.yogi.price) {
    automaticUpgrades.yogi.quantity++;
    plasticity -= automaticUpgrades.yogi.price;
    console.log("yogi: " + plasticity);
  }
  update();
}

function submersionCBD() {
  if (plasticity >= automaticUpgrades.cbdOil.price) {
    automaticUpgrades.cbdOil.quantity++;
    plasticity -= automaticUpgrades.cbdOil.price;
    console.log("CBD: " + plasticity);
  }
  update();
}

function collectAutoUpgrades() {
  //iterate over autoUpgrades, total quantity of each autoUpgrade times multiplier, then add that value to plasticity resource
  //setInterval to make sure this occurs every 3 seconds automatically and don't forget to invoke it
  for (let quantity in automaticUpgrades) {
    if (automaticUpgrades.hasOwnProperty(quantity, multiplier)) {
      plasticity += automaticUpgrades[quantity] * automaticUpgrades[multiplier];
    }
  }
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

// startInterval(); when either quantity of summon yogi or cbd oil is > 0
update();
