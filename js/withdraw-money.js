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

            const transactionForm = document.getElementById('transaction-form');

            let transactionHistory = document.createElement('div');
            transactionHistory.innerHTML = `
            
            <div class="navbar bg-base-300 rounded-box mt-4 flex justify-between items-center px-6">
                <i class="fa-solid fa-money-check-dollar"></i>
                <div class="flex flex-col item-center">
                    <div class="flex-1 px-2 lg:flex-none space-y-2">
                        <a class="text-lg font-bold text-red-500">Cash Out - $${withdrawMoney} and New Total Amount -  $${newTotalMoney}</a>
                        <p id="transaction-time" class="text-sm text-[#08080880]">Today 01:44 AM</p>
                    </div>
                </div>

                <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
            </div>
            `

            transactionForm.appendChild(transactionHistory);
        };
    });