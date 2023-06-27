import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/AuthContext';

const Register = () => {
    const { users, setUsers } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = { email, password, isAdmin };
        setUsers([...users, newUser]);
    };

    return (
        <form onSubmit={handleRegister}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type='checkbox' checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />
            <button type='submit'>Register</button>
        </form>
    );
};

export default Register;
