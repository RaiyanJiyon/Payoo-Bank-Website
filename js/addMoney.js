document.getElementById('add-money-button')
    .addEventListener('click', (event) => {
        event.preventDefault();

        const pinCode = getInputFieldValueById('add-money-pin-number');
        const totalAmount = getTextFieldValueById('total-amount');
        const addAmount = getInputFieldValueById('add-amount-money');

        if (pinCode !== 1234 || isNaN(addAmount)) {
            alert('Invalid Pin Code or Invalid Number');
            return;
        } else {
            const newTotalAmount = totalAmount + addAmount;
            document.getElementById('total-amount').innerText = newTotalAmount;
            
            const transaction = document.getElementById('transaction');
            let p = document.createElement('p');
            p.innerText = `Added: ${addAmount} Tk. New Balance: ${newTotalAmount}`;
            p.style.color = 'green';
            transaction.appendChild(p);
        };
    });