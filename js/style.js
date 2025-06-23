document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    const buttonConfirm = form.querySelector('button[type="submit"]');

    buttonConfirm.addEventListener('click', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;

        if (email && password) {
            setTimeout(() => {
                alert('Login successful! Redirecting to dashboard...');
                window.location.href = 'konsultasi.html';
            }, 0);
        } else {
            alert('Please fill in both email and password!');
        }
    });
});