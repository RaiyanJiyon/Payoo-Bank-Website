function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    return inputValueNumber;
}

function getTextFieldValueById(id) {
    const inputValue = document.getElementById(id).innerText;
    const inputValueNumber = Number(inputValue);
    return inputValueNumber;
}