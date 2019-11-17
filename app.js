let plasticity = 0;
let plasticityAmtElem = document.querySelector("#plasticity-amt");
let showerElem = document.querySelector("#shower");
let quitFbElem = document.querySelector("#quit-fb");
let summonYogiElem = document.querySelector("#yogi");
let submersionCbdElem = document.querySelector("#cbd-oil");
let showerButtonElem = document.querySelector("#shower-btn");

let clickUpgrades = {
  showerThink: {
    price: 10,
    quantity: 0,
    multiplier: 1,
    description: "Additional +1 to each click."
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
  showerElem.innerHTML = `${clickUpgrades.showerThink.price}: ${clickUpgrades.showerThink.quantity}`;
  quitFbElem.innerHTML = `${clickUpgrades.quitFb.price}: ${clickUpgrades.quitFb.quantity}`;
  summonYogiElem.innerHTML = `${automaticUpgrades.yogi.price}: ${automaticUpgrades.yogi.quantity}`;
  submersionCbdElem.innerHTML = `${automaticUpgrades.cbdOil.price}: ${automaticUpgrades.cbdOil.quantity}`;
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
    automaticUpgrades.yogi.price += 15;
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
  console.log("3 seconds");
}

// TODO make button description appear on mouse hover and disappear when mouse is away
// function showBtnDescription() {
//   showerButtonElem.innerHTML = clickUpgrades.showerThink.description;
// }

// function hideBtnDescription() {
//   showerButtonElem.innerHTML = "";
// }

update();
