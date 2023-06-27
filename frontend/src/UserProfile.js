import React, { useContext } from 'react';
import { UserContext } from './context/AuthContext';

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);
    console.log("bla",currentUser)
  return (
    <div>
      <h2>User Profile</h2>
    </div>
  );
};

export default UserProfile;