// login button event handler....
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
// deposit button event handler....
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;

    // document.getElementById('currentDeposit').innerText = totalDeposit;

    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;

    // document.getElementById('currentBalance').innerText = totalBalance;
    // document.getElementById('depositAmount').value = '';

    const depositNumber = getInputNumber('depositAmount');
    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);
    document.getElementById('depositAmount').value = '';
})
// withdraw button event handler....
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    var withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance',  -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = '';
})


function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


