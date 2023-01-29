import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heading,
  Button,
  Avatar,
  Text,
  Container,
  Card,
  Flex,
  Spacer,
  Box,
  Center,
} from '@chakra-ui/react';

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
    <Container>
      <Card>
        <Flex direction='column' align='center' p={5}>
          <Avatar
            size={'2xl'}
            src={user.photoURL}
            alt={'Avatar Alt'}
            m={4}
            pos={'relative'}
            name={user.displayName}
          />
          <Heading>{user.displayName}</Heading>
          <Text>{user.email}</Text>
        </Flex>
        <Flex mt={4}>
          <Spacer />
          <DisplayNameModal />
          <Spacer />
          <UserPhotoModal />
          <Spacer />
        </Flex>
        <Center>
          <Box m={5}>
            <Button mt={10} onClick={handleLogout}>
              Log out
            </Button>
          </Box>
        </Center>
      </Card>
    </Container>
  );
};

export default AccountPage;
