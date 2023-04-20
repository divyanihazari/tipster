const bill = document.getElementById("billAmount");
const tipPercent = document.getElementById("tipPercent");
const totalh3 = document.getElementById("total");

function calculate() {
    const billAmount = Number(bill.value);
    const tipPercentage = Number(tipPercent.value)/100;
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    totalh3.innerText = totalAmount;
}