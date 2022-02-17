function monthlyIncome() {
            const incomeField = document.getElementById('income-input');
            let monthlyField = parseFloat(incomeField.value);
            return monthlyField;
        
    };
    
    function getRemainingBalance(){
        //Monthly Total Cost 
        const foodInput = document.getElementById('food-input');
        const foodInputValue = parseFloat(foodInput.value);
        const rentInput = document.getElementById('rent-input');
        const rentInputValue = parseFloat(rentInput.value);
        const clothesInput = document.getElementById('clothes-input');
        const clothesInputValue = parseFloat(clothesInput.value);
    
        //Calculate Expense Total
        if(typeof foodInputValue == 'number' && foodInputValue >= 0 && typeof rentInputValue == 'number' && rentInputValue >= 0 && typeof clothesInputValue == 'number' && clothesInputValue >= 0) {
        const expensesAmount = document.getElementById('expenses-amount');
        expensesAmount.innerText = foodInputValue + rentInputValue + clothesInputValue;
    
        //Calculate Balance Total
        const remainingBalance = document.getElementById('last-balance');
        remainingBalance.innerText = monthlyIncome() - expensesAmount.innerText;
        return remainingBalance.innerText;
        }
        else {
            alert('Please Enter a Valid Number!!!');
        }
    }
    
    //Add Click Handler 
    document.getElementById('calculate-button').addEventListener('click',function (){
        getRemainingBalance();
    });
    
    //Add Click Handler
    document.getElementById('save-button').addEventListener('click', function(){
        const saveField = document.getElementById('save-input');
        const savingAmmount = document.getElementById('saving-amount');
        savingAmmount.innerText = (saveField.value / 100) * monthlyIncome(); 
        //Calculate Remaining Total Balance
        if(savingAmmount.innerText < getRemainingBalance()) {
            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = getRemainingBalance() - savingAmmount.innerText;
        }
        else{
            alert('Please Enter valid Number');
        }
    });