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
        };
    });