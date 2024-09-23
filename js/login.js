document.getElementById('login-btn')
    .addEventListener('click', (event) => {
        event.preventDefault();

        const inputPhoneNumber = document.getElementById('input-phone-number').value;
        const inputPinCode = document.getElementById('input-pin-code').value;

        if (inputPhoneNumber === '019' && inputPinCode === '1') {
            window.location.href = "home.html";
        } else {
            alert('Invalid Phone Number or Pin Code');
        };
    });