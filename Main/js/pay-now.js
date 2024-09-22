document.getElementById('pay-now-btn')
    .addEventListener('click', (event) => {
        event.preventDefault();
        console.log('click')

        const accountNumber = document.getElementById('pay-now-account-number').value;
        const amountNumber = getInputElementValueAsNumber('pay-now-amount-number');
        const pinCode = getInputElementValueAsNumber('pay-now-pin');
        const totalMoneyElement = document.getElementById('count-money');
        const totalMoney = Number(totalMoneyElement.innerText);

        if (accountNumber.length !== 11 || pinCode !== 1 || isNaN(amountNumber) || amountNumber > totalMoney || amountNumber < 0) {
            alert('Invalid User Account or Invalid Pin Code or Invalid Amount');
        } else {
            const newTotalMoney = totalMoney - amountNumber;
            totalMoneyElement.innerText = newTotalMoney;
        };
    });