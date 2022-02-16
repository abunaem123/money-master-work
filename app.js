document.body.style.backgroundColor = 'light'
function monthlyIncome() {
    const incomeInput = document.getElementById('income-input');
    let incomeTotal = parseInt(incomeInput.value);

    return incomeTotal;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodInputValue = parseFloat(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentInputValue = parseFloat(rentInput.value);

    const clotheInput = document.getElementById('clothes-input');
    const clotheInputValue = parseFloat(clotheInput.value);

    // Expense Balance 
    const ammountExpense = document.getElementById('expenses-amount');
    ammountExpense.innerText = foodInputValue + rentInputValue + clotheInputValue;

    // Excluding costs
    const lastBalance = document.getElementById('last-balance');
    lastBalance.innerText = monthlyIncome() - ammountExpense.innerText;
});
