import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Text,
  Flex,
} from '@chakra-ui/react';
import { UserAuth } from '../context/AuthContext';

const DisplayNameModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState('');

  const { updateDisplayName, user } = UserAuth();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSave = async () => {
    await updateDisplayName(username);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Change Username</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                ref={initialRef}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DisplayNameModal;
