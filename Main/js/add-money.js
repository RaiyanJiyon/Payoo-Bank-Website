document.getElementById('add-money-btn')
    .addEventListener('click', (event) => {
        event.preventDefault();

        const addMoney = getInputElementValueAsNumber('input-amount-number');
        const pinCode = getInputElementValueAsNumber('pin');
        
        if (pinCode !== 1 || isNaN(addMoney) || addMoney < 0) {
            alert('Invalid Pin Code or Invalid Money Number');
        } else {
            const totalMoneyElement = document.getElementById('count-money');
            const totalMoney = Number(totalMoneyElement.innerText);
            const newTotalMoney = totalMoney + addMoney;
            totalMoneyElement.innerText = newTotalMoney;
        };
    });