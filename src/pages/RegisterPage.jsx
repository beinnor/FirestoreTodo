import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { UserAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password === password2) {
      try {
        await createUser(email, password);
        navigate('/account');
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Passwords doesn't match");
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Register your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Already have an account?{' '}
            <Link href='/' color={'blue.400'}>
              Login
            </Link>{' '}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl isInvalid={error} id='email'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isInvalid={error} id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isInvalid={error} id='password2'>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type='password'
                onChange={(e) => {
                  setError('');
                  setPassword2(e.target.value);
                }}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterPage;
