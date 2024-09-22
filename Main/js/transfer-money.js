document.getElementById('transfer-money-btn')
    .addEventListener('click', (event) => {
        event.preventDefault();
        console.log('click')

        const transferAccount = document.getElementById('transfer-account').value;
        const transferMoney = getInputElementValueAsNumber('transfer-amount-number');
        const pinCode = getInputElementValueAsNumber('transfer-pin');
        const totalMoneyElement = document.getElementById('count-money');
        const totalMoney = Number(totalMoneyElement.innerText);

        if (transferAccount.length !== 11 || pinCode !== 1 || isNaN(transferMoney) || transferMoney > totalMoney || transferMoney < 0) {
            alert('Invalid User Account or Invalid Pin Code or Invalid Amount');
        } else {
            const newTotalMoney = totalMoney - transferMoney;
            totalMoneyElement.innerText = newTotalMoney;
        };
    });