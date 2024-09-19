const addForm = document.getElementById('add-money-form');
const withdrawForm = document.getElementById('withdraw-money-form');
const transactionForm = document.getElementById('transaction');

document.getElementById('withdraw-button')
    .addEventListener('click', () => {
        withdrawForm.classList.remove('hidden');
        addForm.classList.add('hidden');
        transactionForm.classList.add('hidden');
    });


document.getElementById('add-button')
    .addEventListener('click', () => {
        withdrawForm.classList.add('hidden');
        transactionForm.classList.add('hidden');
        addForm.classList.remove('hidden');
    });


document.getElementById('transaction-button')
    .addEventListener('click', () => {
        transactionForm.classList.remove('hidden');
        withdrawForm.classList.add('hidden');
        addForm.classList.add('hidden');
    });

