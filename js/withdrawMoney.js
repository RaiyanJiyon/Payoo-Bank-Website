document.getElementById('cash-out-money-button')
    .addEventListener('click', (event) => {
        event.preventDefault();

        const pinCode = getInputFieldValueById('cash-out-money-pin-number');
        const totalAmount = getTextFieldValueById('total-amount');
        const withdrawAmount = getInputFieldValueById('cash-out-amount-money');

        if (pinCode !== 1234 || isNaN(withdrawAmount) || withdrawAmount > totalAmount) {
            alert('Invalid Pin Code or Invalid Number');
            return;
        } else {
            const newTotalAmount = totalAmount - withdrawAmount;
            document.getElementById('total-amount').innerText = newTotalAmount;

            const transaction = document.getElementById('transaction');
            let p = document.createElement('p');
            p.innerText = `Withdraw: ${withdrawAmount} Tk. New Balance: ${newTotalAmount}`;
            p.style.color = 'red';
            transaction.appendChild(p);
        };
    });