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

const updaterHanndler = (e) => {
  e.preventDefault();
  let newIncome = parseFloat(incomeField.value) || 0;
  let newExpense = parseFloat(expenseField.value) || 0;
  let newBalance = newIncome - newExpense;

  let currentIncome = parseFloat(totalIncome.textContent);
  let currentExpense = parseFloat(totalExpense.textContent);
  let currentBalance = newBalance;

  totalIncome.textContent = `${(currentIncome + newIncome).toFixed(2)}€`;
  totalExpense.textContent = `${(currentExpense + newExpense).toFixed(2)}€`;
  totalBalance.textContent = `${currentBalance}€`;

  incomeField.value = "";
  expenseField.value = "";
};

toggleBtn.addEventListener("click", toggleHandler);
updater.addEventListener("submit", updaterHanndler);
