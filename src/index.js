// get user input
const tipForm = document.querySelector("#tip-form"); //global scope

tipForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const billAmount = Number(document.querySelector("#bill-amount").value); //function scoped
  const tipPercentage = Number(document.querySelector("#tip-amount").value);
  const finalTip = billAmount * (tipPercentage / 100);
  const finalCost = finalTip + billAmount;
  console.log(finalTip, finalCost);
  document.getElementById("final-tip").innerHTML = `$ ${finalTip}`;
  document.getElementById("final-cost").innerHTML = `$ ${finalCost}`;
});

//listen to button - then refresh or reset calculator
document.getElementById("clear-button").addEventListener("click", function () {
  location.reload();
  return false;
});
