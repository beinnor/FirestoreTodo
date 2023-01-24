import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Center,
} from '@chakra-ui/react';

import { UserAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signInUser } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInUser(email, password);
      navigate('/account');
    } catch (error) {
      setError(error.message);
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
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Don't have an account?{' '}
            <Link href='/register' color={'blue.400'}>
              Register
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
              <Input
                type='email'
                onChange={(e) => {
                  setError('');
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isInvalid={error} id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                onChange={(e) => {
                  setError('');
                  setPassword(e.target.value);
                }}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>

            <Stack spacing={10}>
              <Center>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Center>

              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
