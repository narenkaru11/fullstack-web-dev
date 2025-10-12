const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");

button.addEventListener("click", function () {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(
    2
  )}`;
});
