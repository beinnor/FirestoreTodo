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

const UserPhotoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [photoUrl, setPhotoUrl] = useState('');

  const { updatePhotoUrl, user } = UserAuth();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSave = async () => {
    await updatePhotoUrl(photoUrl);
    onClose();
  };

  return (
    <>
      <Flex>
        <Text ml={4} ref={finalRef}>
          Photo: {!user.photoURL ? 'Not set' : user.photoURL}
        </Text>
        <Button onClick={onOpen}>Set Photo Url</Button>
      </Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Photo Url</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Photo Url</FormLabel>
              <Input
                ref={initialRef}
                placeholder='Photo Url'
                onChange={(e) => setPhotoUrl(e.target.value)}
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

export default UserPhotoModal;
