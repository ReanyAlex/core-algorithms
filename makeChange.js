/* makeChange

Given a price and an amount paid, return the number of coins in each denomination that should be given as change.

Note: because JavaScript is bad at decimal math, the inputs are given as integers that represent dollar + cent amounts, so 139 = $1.39.
*/

function makeChange(money) {
  //value of each coin denomination
  const changeValue = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1
  }
  // holder for the amount of each coin denomination
  const changeAmount = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  let changeDue =(money.amountGiven - money.price)

  // function to checkchange owed and break down recursively how many of each coins are owed
  function checkChange() {
    if (changeDue > 25) {
      changeAmount.quarters += 1;
      changeDue -= 25;
      return checkChange()
    }else if (changeDue >= 10) {
      changeAmount.dimes += 1;
      changeDue -= 10;
      return checkChange()
    }else if (changeDue >= 5) {
      changeAmount.nickels += 1;
      changeDue -= 5;
      return checkChange()
    }else if (changeDue >= 1) {
      changeAmount.pennies += 1;
      changeDue -= 1;
      return checkChange()
    }else {
      return changeAmount;
    }
  }

  // checks if change needs to be given or not
  if (money.price === money.amountGiven) {
    return { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
  } else if (money.price > money.amountGiven) {
    return  "You do not have enough money";
  }else{
    return checkChange();
  }
}

console.log(makeChange({ price: 100, amountGiven: 100 }));
// => { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }

console.log(makeChange({ price: 159, amountGiven: 200 }));
// => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }

console.log(makeChange({ price: 432, amountGiven: 500 }));
// => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }
