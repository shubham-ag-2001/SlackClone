import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup(username, password);
        navigate('/login');
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
