document.getElementById('deposit-button').addEventListener('click', function(){

const depositInput = document.getElementById('deposit-input')

const depositAmount = depositInput.value

const depositTotal = document.getElementById('deposit-total')

const currentDepositAmount = parseFloat(depositTotal.innerText)
const updateDepositTotal = parseFloat(currentDepositAmount + depositAmount)

depositTotal.innerText = updateDepositTotal

const balanceTotal = document.getElementById('balance-total')
const currentBalanceTotal = parseFloat(balanceTotal.innerText)
const updateBalanceTotal = currentBalanceTotal + depositAmount
balanceTotal.innerText = updateBalanceTotal


depositInput.value = " "

})
document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawInput = document.getElementById('withdraw-input')
    
    const withdrawAmount = withdrawInput.value
    
    const withdrawTotal = document.getElementById('withdraw-total')

    const currentWithdrawAmount = parseFloat(withdrawTotal.innerText)
const updatewithdrawTotal = parseFloat(currentWithdrawAmount + withdrawAmount)

withdrawTotal.innerText = updatewithdrawTotal

const balanceTotal = document.getElementById('balance-total')
const currentBalanceTotal = parseFloat(balanceTotal.innerText)
const updateBalanceTotal = currentBalanceTotal 
balanceTotal.innerText = updateBalanceTotal - withdrawAmount


withdrawInput.value = " "


})