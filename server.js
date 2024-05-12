// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Simulated user data (replace with your actual authentication logic)
const users = [
    { username: 'admin', password: 'secret' }
];

// Endpoint for form submission (login)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user exists and credentials are valid
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Redirect to home.html upon successful authentication
        res.redirect('/home.html');
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
