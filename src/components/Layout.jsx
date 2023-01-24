import { useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import imgUrl from '../assets/logo-color.svg';

import { UserAuth } from '../context/AuthContext';

const Links = ['Todos', 'Account'];

const NavLink = ({ children }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, logOut } = UserAuth();
  const [error, setError] = useState('');

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
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                boxSize='50px'
                objectFit='contain'
                src={imgUrl}
                alt='FirestoreTodo'
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link
                as={RouterLink}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                to='/'
              >
                Todos
              </Link>
              <Link
                as={RouterLink}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                to='/account'
              >
                Account
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar size={'sm'} src={user.photoURL} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link as={RouterLink} to='/account'>
                    Account
                  </Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link
                as={RouterLink}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                to='/todos'
              >
                Todos
              </Link>
              <Link
                as={RouterLink}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                to='/account'
              >
                Account
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
