let income = document.getElementById("income");
let food = document.getElementById("food");
let clothes = document.getElementById("clothes");
let calculateButton = document.getElementById("calculate-button");
let totalExpenses = document.getElementById("total-expenses");
let balance = document.getElementById("balance");
//part-2
let savingsButton = document.getElementById("savings-button");
let savings = document.getElementById("savings");
let savingsAmount = document.getElementById("saving-amount");
let remainingBalance = document.getElementById("remaining-balance");

//click event-1
calculateButton.addEventListener("click", function () {
  //values
  let getIncomeValue = Number(income.value);
  let getFoodValue = Number(food.value);
  let getClothesValue = Number(clothes.value);
  //calculation
  let foodAndClothes = getFoodValue + getClothesValue;
  let totalExpensesValue = getIncomeValue - foodAndClothes;
  balance.innerText = totalExpensesValue;
  totalExpenses.innerText = foodAndClothes;
});
//click event-2
savingsButton.addEventListener("click", function () {
  //values
  let getIncomeValue = Number(income.value);
  let getFoodValue = Number(food.value);
  let getClothesValue = Number(clothes.value);
  let getSavingsAmount = Number(savings.value);
  //calculation-1
  let foodAndClothes = getFoodValue + getClothesValue;
  let totalExpensesValue = getIncomeValue - foodAndClothes;
  //calculation-2
  let savingsTotal = getSavingsAmount * 100;
  let remainingBalanceTotal = totalExpensesValue - savingsTotal;
  savingsAmount.innerText = savingsTotal;
  remainingBalance.innerText = remainingBalanceTotal;
});
