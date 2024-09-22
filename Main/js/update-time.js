function updateTransactionTime() {
    const timeElement = document.getElementById('transaction-time');
    const now = new Date();
    
    // Format time as "hh:mm AM/PM"
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;  // Convert 24-hour to 12-hour format

    const formattedTime = `Today ${formattedHours}:${minutes} ${ampm}`;
    
    // Update the transaction time in the DOM
    timeElement.textContent = formattedTime;
}

// Call the function to set the time initially
updateTransactionTime();

// Optionally, you can keep the time updated periodically (e.g., every minute)
setInterval(updateTransactionTime, 60000);
