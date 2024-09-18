document.getElementById('cash-out-money-button')
    .addEventListener('click', (event) => {
        event.preventDefault();
        const cashOutMoneyPin = document.getElementById('cash-out-money-pin-number').value;
        let totalAmountElement = document.getElementById('total-amount');
        let totalAmountNumber = Number(totalAmountElement.textContent);
        const cashOutMoney = document.getElementById('cash-out-amount-money').value;
        const cashOutMoneyNumber = Number(cashOutMoney);
        
        if (cashOutMoneyPin === '1234' && totalAmountNumber > cashOutMoneyNumber) {
            totalAmountNumber = totalAmountNumber - cashOutMoneyNumber;
            totalAmountElement.textContent = totalAmountNumber;
        } else {
            alert('Invalid Pin Number or Insufficient Funds!');
        };
    });