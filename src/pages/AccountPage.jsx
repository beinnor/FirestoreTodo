import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Button } from '@chakra-ui/react';

import UserPhotoModal from '../components/UserPhotoModal';
import DisplayNameModal from '../components/DisplayNameModal';

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
      <Heading>Account</Heading>
      <p>User Email: {user.email}</p>
      <DisplayNameModal />
      <UserPhotoModal />
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
};

export default AccountPage;
