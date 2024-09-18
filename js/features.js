const addForm = document.getElementById('add-money-form');
const withdrawForm = document.getElementById('withdraw-money-form');

document.getElementById('withdraw-button')
    .addEventListener('click', () => {
        withdrawForm.classList.remove('hidden');
        addForm.classList.add('hidden');
    });


document.getElementById('add-button')
    .addEventListener('click', () => {
        withdrawForm.classList.add('hidden');
        addForm.classList.remove('hidden');
    });