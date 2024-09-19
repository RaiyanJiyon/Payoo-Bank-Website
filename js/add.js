document.getElementById('add-money-button')
    .addEventListener('click', (event) => {
        event.preventDefault();
        const addMoneyPin = document.getElementById('add-money-pin-number').value;
        
        if (addMoneyPin === '1234') {
            let totalAmountElement = document.getElementById('total-amount');
            let totalAmountNumber = Number(totalAmountElement.textContent);
            const addMoney = document.getElementById('add-amount-money').value;
            const addMoneyNumber = Number(addMoney);
            totalAmountNumber = totalAmountNumber + addMoneyNumber;
            totalAmountElement.textContent = totalAmountNumber;
        } else {
            alert('Invalid Pin Number!');
        };
    });