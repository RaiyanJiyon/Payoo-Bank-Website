function getInputElementValueAsNumber(id) {
    const inputElementValue = document.getElementById(id).value;
    const inputValueAsNumber = Number(inputElementValue);
    return inputValueAsNumber;
}

function getTextElementValueAsNumber(id) {
    const textElementValue = document.getElementById(id).innerText;
    const textValueAsNumber = Number(textElementValue);
    return textValueAsNumber;
}


function toggleForm(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('withdraw-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('bonus-money-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden')
}