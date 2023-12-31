// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit(){
  let genRanNum = Math.random();
  return genRanNum > 5;
}

function shipCanFire(){
  if (shipHealth > 0 && shipAmmo > 0){
    return true;
  }else{
    return false;
  }
}

function isDestroyed(health) {
  // return true if health is zero or less
  return health <= 0;
}

function reloadShip() {
  // reduce ship health by 1 and increase ammo by 3
  shipHealth --;
  shipAmmo += 3;
}