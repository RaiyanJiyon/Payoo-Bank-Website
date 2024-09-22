document.getElementById('get-bonus-btn')
    .addEventListener('click', (event) => {
        event.preventDefault();

        const validCoupons = ['BONUS2023', 'FREEMONEY', 'LUCKYDAY'];
        const couponCode = document.getElementById('coupon').value.trim();

        if (validCoupons.includes(couponCode)) {
            alert('Coupon accepted! Bonus added to your account.');
        } else {
            alert('Invalid coupon code. Please try again.');
        };
    });