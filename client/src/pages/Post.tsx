import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';

function Post() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      py={6}
      px={10}
      bg="teal.300"
    >
      <Text fontSize="3xl">Zufa Rental</Text>
      <Flex
        justifySelf="flex-end"
        alignItems="center"
      >
        <Link fontSize="2xl" pr={6} to="/">Home</Link>
        <Link fontSize="2xl" pr={6} to="/">Login</Link>
        <Link fontSize="2xl" pr={6} to="/">Signup</Link>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      
    </Flex>
  );
}

export default Post;
