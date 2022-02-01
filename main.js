const totalBalance = document.querySelector("#tot-balance");
const totalIncome = document.querySelector("#tot-income");
const totalExpense = document.querySelector("#tot-expense");
const toggleBtn = document.querySelector("#toggle");
const updater = document.querySelector("#updater-form");
const updaterSection = document.querySelector("#updater");
const incomeField = document.querySelector("#income-field");
const expenseField = document.querySelector("#expense-field");

const toggleHandler = () => {
  if (updaterSection.style.display == "flex") {
    updaterSection.style.display = "none";
  } else {
    updaterSection.style.display = "flex";
  }
};

let incomeCount = 0;
let expenseCount = 0;

const updaterHanndler = (e) => {
  e.preventDefault();

  if (!incomeField.value && !expenseField.value) {
    alert("No transaction received. Please insert new operations to proceed!");
  }

  let newIncome = Math.abs(parseFloat(incomeField.value)) || 0;
  let newExpense = Math.abs(parseFloat(expenseField.value)) || 0;

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
