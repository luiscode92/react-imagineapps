import React, { createContext, useState } from 'react';
import mockData from '../mockData';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [users, setUsers] = useState(mockData.users);
    const initialUser = JSON.parse(localStorage.getItem('user'));
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(initialUser);
    console.log("user", currentUser)
    const loginHandler = (email, password) => {
        const user = mockData.users.find((user) => user.email === email && user.password === password);
        setCurrentUser(user)
        localStorage.setItem('user', JSON.stringify(user));
        if (user) {
          setLoggedInUser(user);
        } else {
          console.log('Invalid email or password');
        }
    };

    return (
        <UserContext.Provider value={{ users, setUsers, loggedInUser, setLoggedInUser, loginHandler,currentUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
