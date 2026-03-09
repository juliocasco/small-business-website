document.addEventListener('DOMContentLoaded', () => {
    const emailinput = document.getElementById('email-input');
    const SubscribeBtn = document.getElementById('subscribe-btn');
    const message = document.getElementById('message');

    if (!emailinput || !SubscribeBtn || !message) return;

    SubscribeBtn.addEventListener('click', () => {
        const newItem = emailinput.value.trim();
        if (newItem) {
            message.textContent = newItem;
            emailinput.value = '';
            emailinput.placeholder = 'Email subscribed!';
        } else {
            emailinput.placeholder = 'Please enter a valid email address!';
        }
    });
});

emailinput.addEventListener('input', () => {
    if (e.key === 'Enter') {
        btn.click();
    }
});