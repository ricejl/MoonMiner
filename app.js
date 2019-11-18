let plasticity = 0;
let plasticityAmtElem = document.querySelector("#plasticity-amt");
let showerElem = document.querySelector("#shower");
let quitFbElem = document.querySelector("#quit-fb");
let summonYogiElem = document.querySelector("#yogi");
let submersionCbdElem = document.querySelector("#cbd-oil");
let showerButtonElem = document.querySelector("#shower-btn");
let quitFbButtonElem = document.querySelector("#fb-btn");
let yogiButtonElem = document.querySelector("#yogi-btn");
let cbdButtonElem = document.querySelector("#cbd-btn");

let clickUpgrades = {
  showerThink: {
    price: 10,
    quantity: 0,
    multiplier: 1,
    description: "Additional +1 to each click.",
    button: showerButtonElem
  },
  quitFb: {
    price: 15,
    quantity: 0,
    multiplier: 5,
    description: "Additional +5 to each click.",
    button: quitFbButtonElem
  }
};

let automaticUpgrades = {
  yogi: {
    price: 50,
    quantity: 0,
    multiplier: 20,
    description: "Automatically generates +20 every 3 seconds.",
    button: yogiButtonElem
  },
  cbdOil: {
    price: 25,
    quantity: 0,
    multiplier: 10,
    description: "Automatically generates +10 every 3 seconds.",
    button: cbdButtonElem
  }
};

function sleep() {
  plasticity++;
  clickUpgrades.showerThink.quantity;
  plasticity +=
    clickUpgrades.showerThink.multiplier * clickUpgrades.showerThink.quantity;
  plasticity += clickUpgrades.quitFb.multiplier * clickUpgrades.quitFb.quantity;
  update();
}

function showerThink() {
  if (plasticity >= clickUpgrades.showerThink.price) {
    clickUpgrades.showerThink.quantity++;
    plasticity -= clickUpgrades.showerThink.price;
    clickUpgrades.showerThink.price += 5;
  }
  update();
}

function quitFb() {
  if (plasticity >= clickUpgrades.quitFb.price) {
    clickUpgrades.quitFb.quantity++;
    plasticity -= clickUpgrades.quitFb.price;
    clickUpgrades.quitFb.price += 10;
  }
  update();
}

function summonYogi() {
  if (plasticity >= automaticUpgrades.yogi.price) {
    automaticUpgrades.yogi.quantity++;
    plasticity -= automaticUpgrades.yogi.price;
    automaticUpgrades.yogi.price += 20;
  }
  update();
}

function submersionCBD() {
  if (plasticity >= automaticUpgrades.cbdOil.price) {
    automaticUpgrades.cbdOil.quantity++;
    plasticity -= automaticUpgrades.cbdOil.price;
    automaticUpgrades.cbdOil.price += 15;
  }
  update();
}

function collectAutoUpgrades() {
  for (let quantity in automaticUpgrades) {
    if (automaticUpgrades.hasOwnProperty(quantity)) {
      let upgradeQuantity = automaticUpgrades[quantity].quantity;
      let upgradeMultiplier = automaticUpgrades[quantity].multiplier;
      plasticity += upgradeQuantity * upgradeMultiplier;
    }
  }
  update();
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function update() {
  plasticityAmtElem.innerHTML = plasticity;
  showerElem.innerHTML = `${clickUpgrades.showerThink.price}: ${clickUpgrades.showerThink.quantity}`;
  quitFbElem.innerHTML = `${clickUpgrades.quitFb.price}: ${clickUpgrades.quitFb.quantity}`;
  summonYogiElem.innerHTML = `${automaticUpgrades.yogi.price}: ${automaticUpgrades.yogi.quantity}`;
  submersionCbdElem.innerHTML = `${automaticUpgrades.cbdOil.price}: ${automaticUpgrades.cbdOil.quantity}`;
  buttonToggle();
}

function buttonToggle() {
  for (let price in clickUpgrades) {
    if (clickUpgrades.hasOwnProperty(price)) {
      if (plasticity < clickUpgrades[price].price) {
        clickUpgrades[price].button.setAttribute("disabled", "true");
      } else {
        clickUpgrades[price].button.removeAttribute("disabled");
      }
    }
  }
  for (let price in automaticUpgrades) {
    if (automaticUpgrades.hasOwnProperty(price)) {
      if (plasticity < automaticUpgrades[price].price) {
        automaticUpgrades[price].button.setAttribute("disabled", "true");
      } else {
        automaticUpgrades[price].button.removeAttribute("disabled");
      }
    }
  }
}

//TODO dry code - can add automatic true/false and make purchasables into single dictionary
// TODO make button description appear on mouse hover and disappear when mouse is away

update();
startInterval();
