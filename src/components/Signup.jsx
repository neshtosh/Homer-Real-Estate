import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import './Signup.css'; // Separate CSS file for styling

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State to handle errors
    const { login } = useContext(AuthContext);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null); // Reset error on new submission

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });
            

            const data = await response.json();

            if (response.ok) {
                login(data.user, data.token);
                alert('Signup successful!');
                window.location.href = '/';
            } else {
                setError(data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred during signup. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h2>Create Your Account</h2>
            <form className="signup-form" onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
