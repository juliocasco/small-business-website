document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('new-heading');
    const btn = document.getElementById('update-btn');
    const heading = document.getElementById('cta-heading');

    if (!input || !btn || !heading) return;

    btn.addEventListener('click', () => {
        const newItem = input.value.trim();
        if (newItem) {
            heading.textContent = newItem;
            input.value = '';
            input.placeholder = 'Headline Updated!';
        } else {
            input.placeholder = 'Please enter a headline!';
        }
    });
});

input.addEventListener('input', () => {
    if (e.key === 'Enter') {
        btn.click();
    }
});