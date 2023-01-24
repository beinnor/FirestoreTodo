import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext';

const AccountPage = () => {
  const { user, logOut } = UserAuth();
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <p>User Name: </p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default AccountPage;
