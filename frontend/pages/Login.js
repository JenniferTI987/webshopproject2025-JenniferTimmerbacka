// Grab from the element
const loginForm = document.getElementById('login-form');

// Add event listener to the form
loginForm.addEventListener('submit', async (e) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Send a POST request to the login endpoint
        const response = await fetch('/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            // Store the token in localStorage            localStorage.setItem('token', data.token);
            // Redirect to the home page or dashboard
            window.location.href = '/';
        } else {
            const errorData = await response.json();
            alert('Login failed: ' + errorData.error);
        }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login. Please try again.');
        }
    });
