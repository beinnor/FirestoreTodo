import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext';

const Account = () => {
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
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Log out
      </button>
    </div>
  );
};

export default Account;
