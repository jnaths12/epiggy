const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});







const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');

// Function to simulate authentication (Replace with your authentication logic)
function authenticateUser(email, password) {
    // Simulated hardcoded credentials
    const users = [
        { email: 'user@gmail.com', password: '12345678', role: 'user' },
        { email: 'admin@gmail.com', password: 'adminpassword', role: 'admin' }
    ];

    const user = users.find(u => u.email === email && u.password === password);
    return user;
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('#loginEmail').value;
    const password = loginForm.querySelector('#loginPassword').value;

    const authenticatedUser = authenticateUser(email, password);
    if (authenticatedUser) {
        if (authenticatedUser.role === 'user') {
            window.location.href = 'epiggy home/index.html';
        } else if (authenticatedUser.role === 'admin') {
            window.location.href = 'admin_home.html';
        }
    } else {
        // Handle invalid credentials
        alert('Invalid credentials. Please try again.');
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values and create a new user account
    // Implement registration logic here
});
