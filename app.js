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
  showerElem.innerHTML = `${clickUpgrades.showerThink.price}: ${clickUpgrades.showerThink.quantity}`;
  quitFbElem.innerHTML = `${clickUpgrades.quitFb.price}: ${clickUpgrades.quitFb.quantity}`;
  summonYogiElem.innerHTML = `${automaticUpgrades.yogi.price}: ${automaticUpgrades.yogi.quantity}`;
  submersionCbdElem.innerHTML = `${automaticUpgrades.cbdOil.price}: ${automaticUpgrades.cbdOil.quantity}`;
}

//use for in loop to iterate over upgrades

function showerThink() {
  if (plasticity >= clickUpgrades.showerThink.price) {
    clickUpgrades.showerThink.quantity++;
    plasticity -= clickUpgrades.showerThink.price;
    clickUpgrades.showerThink.price += 5;
    console.log(
      `current showerthink price is now ${clickUpgrades.showerThink.price}`
    );
  }
  update();
}

function quitFb() {
  if (plasticity >= clickUpgrades.quitFb.price) {
    clickUpgrades.quitFb.quantity++;
    plasticity -= clickUpgrades.quitFb.price;
    clickUpgrades.quitFb.price += 10;
    console.log(
      `current quitfacebook price is now ${clickUpgrades.quitFb.price}`
    );
  }
  update();
}

function summonYogi() {
  if (plasticity >= automaticUpgrades.yogi.price) {
    automaticUpgrades.yogi.quantity++;
    plasticity -= automaticUpgrades.yogi.price;
    console.log("yogi (multiplier 20): " + plasticity);
    automaticUpgrades.yogi.price += 15;
    console.log(`current yogi price is now ${automaticUpgrades.yogi.price}`);
  }
  // TODO invoke collectAutoUpgrades
  update();
}

function submersionCBD() {
  if (plasticity >= automaticUpgrades.cbdOil.price) {
    automaticUpgrades.cbdOil.quantity++;
    plasticity -= automaticUpgrades.cbdOil.price;
    console.log("CBD (multiplier 10): " + plasticity);
    automaticUpgrades.cbdOil.price += 15;
    console.log(`current yogi price is now ${automaticUpgrades.cbdOil.price}`);
  }
  //   TODO collectAutoUpgrades();
  update();
}

function collectAutoUpgrades() {
  //iterate over autoUpgrades, total quantity of each autoUpgrade times multiplier, then add that value to plasticity resource
  //setInterval to make sure this occurs every 3 seconds automatically and don't forget to invoke it
  //   for (let quantity in automaticUpgrades) {
  //     if (automaticUpgrades.hasOwnProperty(quantity, multiplier)) {
  //       plasticity += automaticUpgrades[quantity] * automaticUpgrades[multiplier];
  //       startInterval();
  //     }
  //   }
  for (let product in automaticUpgrades) {
    if (product.hasOwnProperty(quantity)) {
      console.log(`${quantity}`);
      //FIXME (automaticUpgrades[quantity]) returns entire object of relevant quantity
      // FIXME (quantity) returns only the key of relevant quantity
      // FIXME `${automaticUpgrades[quantity]}` returns [object Object]
    }
  }
  for (let multiplier in automaticUpgrades) {
    if (automaticUpgrades.hasOwnProperty(multiplier)) {
      let thing = automaticUpgrades[multiplier];
      console.log(thing);
    }
  }
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
    }
  }
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
  console.log("3 seconds");
}

update();
