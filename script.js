document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation for demonstration purposes
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform other actions
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});
