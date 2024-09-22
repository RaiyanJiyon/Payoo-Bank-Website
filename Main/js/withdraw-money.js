document.getElementById('withdraw-money-btn')
    .addEventListener('click', (event) => {
        event.preventDefault();
        console.log('click')

        const withdrawMoney = getInputElementValueAsNumber('withdraw-amount-number');
        const pinCode = getInputElementValueAsNumber('withdraw-pin');
        const totalMoneyElement = document.getElementById('count-money');
        const totalMoney = Number(totalMoneyElement.innerText);
        
        if (pinCode !== 1 || isNaN(withdrawMoney) || withdrawMoney > totalMoney || withdrawMoney < 0) {
            alert('Invalid Pin Code or Invalid Money Number');
        } else {
            const newTotalMoney = totalMoney - withdrawMoney;
            totalMoneyElement.innerText = newTotalMoney;
        };
    });