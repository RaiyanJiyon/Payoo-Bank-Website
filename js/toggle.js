document.getElementById('add-button')
    .addEventListener('click', () => {
        toggleForm('add-money-form')
    });

document.getElementById('withdraw-button')
    .addEventListener('click', () => {
        toggleForm('withdraw-money-form')
    });

document.getElementById('transfer-button')
    .addEventListener('click', () => {
        toggleForm('transfer-money-form')
    });

document.getElementById('get-bonus-button')
    .addEventListener('click', () => {
        toggleForm('bonus-money-form')
    });

document.getElementById('pay-bill-button')
    .addEventListener('click', () => {
        toggleForm('pay-bill-form')
    });

document.getElementById('transaction-button')
    .addEventListener('click', () => {
        toggleForm('transaction-form')
    });