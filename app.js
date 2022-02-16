function getIncome() {
    const incomeField = document.getElementById('income-input');
    let getIncomeField = parseFloat(incomeField.value);
    return getIncomeField;
};

function catchRemainingBalance() {
    const foodField = document.getElementById('food-input');
    const getFoodField = foodField.value;
    const rentField = document.getElementById('rent-input');
    const getRentField = rentField.value;
    const clothesField = document.getElementById('clothes-input');
    const getClothesField = clothesField.value;

    //Calculate Expense Amount
    const expensesAmount = document.getElementById('expenses-amount');
    expensesAmount.innerText = parseFloat(getFoodField) + parseFloat(getRentField) + parseFloat(getClothesField);

    //Calculate Balance Amount
    const remainingBalance = document.getElementById('last-balance');
    remainingBalance.innerText = getIncome() - expensesAmount.innerText;
    return remainingBalance.innerText;
}

//Add Click Handler to save button for getting total Expense
document.getElementById('calculate-button').addEventListener('click', function () {
    catchRemainingBalance();
});

//Add Click Handler to save button
document.getElementById('save-button').addEventListener('click', function () {
    const saveField = document.getElementById('save-input');
    // const getSaveField = saveField.value;
    const savingAmmount = document.getElementById('saving-amount');
    // let savingAmmountText = savingAmmount.innerText;
    savingAmmount.innerText = (saveField.value / 100) * getIncome();
    //Calculate Remaining Balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = catchRemainingBalance() - savingAmmount.innerText;
    console.log(remainingBalance.innerText);
});