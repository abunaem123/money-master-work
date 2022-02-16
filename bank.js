function monthlyIncome() {
    const incomeInput = document.getElementById('income-input');
    let incomeTotal = parseInt(incomeInput.value);
    // incomeInput.value = '';
    return incomeTotal;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodInputValue = parseFloat(foodInput.value);
    // foodInput.value = '';

    const rentInput = document.getElementById('rent-input');
    const rentInputValue = parseFloat(rentInput.value);
    // rentInput.value = '';

    const clotheInput = document.getElementById('clothes-input');
    const clotheInputValue = parseFloat(clotheInput.value);
    // clotheInput.value = '';

    // Expense Balance 
    const ammountExpense = document.getElementById('expenses-amount');
    ammountExpense.innerText = foodInputValue + rentInputValue + clotheInputValue;

    // Excluding costs
    const lastBalance = document.getElementById('last-balance');
    lastBalance.innerText = monthlyIncome() - ammountExpense.innerText;

    // Saving Amount  

});
document.getElementById('save-button').addEventListener('click', function () {
    const saveField = document.getElementById('save-input');
    // const getSaveField = saveField.value;
    const savingAmmount = document.getElementById('saving-amount');
    // let savingAmmountText = savingAmmount.innerText;
    savingAmmount.innerText = (saveField.value / 100) * monthlyIncome();
    //Calculate Remaining Balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = ammountExpense.innerText - savingAmmount.innerText;
    console.log(remainingBalance.innerText);
});

