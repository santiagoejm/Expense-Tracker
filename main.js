const totalBalance = document.querySelector("#tot-balance");
const totalIncome = document.querySelector("#tot-income");
const totalExpense = document.querySelector("#tot-expense");
const toggleBtn = document.querySelector("#toggle");
const updater = document.querySelector("#updater-form");
const updaterSection = document.querySelector("#updater");
const incomeField = document.querySelector("#income-field");
const expenseField = document.querySelector("#expense-field");

const toggleHandler = () => {
  if (updaterSection.style.display == "none") {
    updaterSection.style.display = "flex";
  } else {
    updaterSection.style.display = "none";
  }
};

let incomeCount = 0;
let expenseCount = 0;

const updaterHanndler = (e) => {
  e.preventDefault();
  let newIncome = parseFloat(incomeField.value) || 0;
  let newExpense = parseFloat(expenseField.value) || 0;

  incomeCount += newIncome;
  expenseCount += newExpense;

  totalIncome.textContent = `${incomeCount.toFixed(2)}€`;
  totalExpense.textContent = `${expenseCount.toFixed(2)}€`;
  totalBalance.textContent = `${(incomeCount - expenseCount).toFixed(2)}€`;

  incomeField.value = "";
  expenseField.value = "";

  if (incomeCount - expenseCount < 0) {
    totalBalance.style.color = "#b71414";
  } else if (incomeCount - expenseCount > 0) {
    totalBalance.style.color = "#096313";
  } else {
    totalBalance.style.color = "#fff";
  }
};

toggleBtn.addEventListener("click", toggleHandler);
updater.addEventListener("submit", updaterHanndler);
