function incomeTotal() {
    const incomeField = document.getElementById('income-input');
    let getIncomeField = parseFloat(incomeField.value);
    return getIncomeField;
};

function catchRemainingBalance() {
    const foodField = document.getElementById('food-input');
    const getFoodField = parseFloat(foodField.value);
    const rentField = document.getElementById('rent-input');
    const getRentField = parseFloat(rentField.value);
    const clothesField = document.getElementById('clothes-input');
    const getClothesField = parseFloat(clothesField.value);
    //error massage
    const errorMsg = document.getElementById('error-msg');
    if (getFoodField < 0 || getRentField < 0 || getClothesField < 0) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        //Calculate Expense Amount
        const expensesAmount = document.getElementById('expenses-amount');
        expensesAmount.innerText = getFoodField + getRentField + getClothesField;

        //Calculate Balance Amount
        const remainingBalance = document.getElementById('last-balance');
        remainingBalance.innerText = incomeTotal() - expensesAmount.innerText;
        return remainingBalance.innerText;
    }

    //Calculate Expense Amount
    // const expensesAmount = document.getElementById('expenses-amount');
    // expensesAmount.innerText = getFoodField + getRentField + getClothesField;

    //Calculate Balance Amount
    // const remainingBalance = document.getElementById('last-balance');
    // remainingBalance.innerText = incomeTotal() - expensesAmount.innerText;
    // return remainingBalance.innerText;
}

//Add Click Handler to save button for getting total Expense
document.getElementById('calculate-button').addEventListener('click', function () {
    catchRemainingBalance();
});

//Add Click Handler to save button
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    // const getSaveField = saveInput.value;
    const savingAmmount = document.getElementById('saving-amount');
    // let savingAmmountText = savingAmmount.innerText;
    savingAmmount.innerText = (saveInput.value / 100) * incomeTotal();
    //Calculate Remaining Balance
    const remainingBalance = document.getElementById('remaining-balance');

    remainingBalance.innerText = catchRemainingBalance() - savingAmmount.innerText;
    console.log(remainingBalance.innerText);

    // error massage
    const errorMsg = document.getElementById('error-msg');
    if (getFoodField < 0 || getRentField < 0 || getClothesField < 0) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        //Calculate Expense Amount
        const expensesAmount = document.getElementById('expenses-amount');
        expensesAmount.innerText = getFoodField + getRentField + getClothesField;

        //Calculate Balance Amount
        const remainingBalance = document.getElementById('last-balance');
        remainingBalance.innerText = incomeTotal() - expensesAmount.innerText;
        return remainingBalance.innerText;
    }
});
