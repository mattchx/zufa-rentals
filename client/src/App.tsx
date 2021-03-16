import * as React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';

import Post from './pages/Post';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Post />
  </ChakraProvider>
);
