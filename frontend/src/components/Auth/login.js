import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/AuthContext';

const Login = () => {
    const { users, setLoggedInUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            setLoggedInUser(user);
        } else {
            // Handle login failure
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    );
};

export default Login;
