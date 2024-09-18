document.getElementById('login-button')
    .addEventListener('click', (event) => {
        event.preventDefault();
        const mobileNumber = document.getElementById('mobile-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        if (mobileNumber === '019' && pinNumber === '1234') {
            window.location.href = "home.html";
        } else {
            alert('Mobile number or Pin Code is invalid.');
        };
    });