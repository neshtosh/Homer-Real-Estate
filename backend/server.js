import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json()); // Middleware for parsing JSON

// Test Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Signup API Route
app.post('/api/auth/signup', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Simulate user creation
    res.status(201).json({ user: { username, email }, token: 'sample-token' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
