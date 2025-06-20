document.addEventListener("DOMContentLoaded", function () {
  const billInputEl = document.getElementById("billAmount");
  const tipInputEl = document.getElementById("tipPercent");
  const calculateBtnEl = document.getElementById("calculateBtn");
  const resetBtnEl = document.getElementById("resetBtn");
  const tipOutputEl = document.getElementById("tipAmount");
  const totalOutputEl = document.getElementById("totalAmount");

  calculateBtnEl.addEventListener("click", function () {
    const bill = parseFloat(billInputEl.value);
    const tipPercent = parseFloat(tipInputEl.value);

    if (isNaN(bill) || bill <= 0 || isNaN(tipPercent) || tipPercent < 0) {
      alert("Please enter valid numbers for both fields.");
      return;
    }

    const tip = bill * (tipPercent / 100);
    const total = bill + tip;

    tipOutputEl.innerText = `Tip: R${tip.toFixed(2)}`;
    totalOutputEl.innerText = `Total: R${total.toFixed(2)}`;
  });

  resetBtnEl.addEventListener("click", function () {
    billInputEl.value = "";
    tipInputEl.value = "";
    tipOutputEl.innerText = "Tip: R0.00";
    totalOutputEl.innerText = "Total: R0.00";
  });
});
