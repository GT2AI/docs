// src/components/layout/DocLayout.jsx
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Flex, 
  useColorMode,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/SideBar';

const DocLayout = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Header />
      
      <Flex flex="1">
        {/* Sidebar for navigation */}
        <Sidebar />
        
        {/* Main content area */}
        <Box
          as="main"
          flex="1"
          
        >
          <Container maxW="container.lg" py={10} px={{ base: 6, md: 10 }}>
            <Outlet />
          </Container>
        </Box>
      </Flex>
      
      <Footer />
    </Box>
  );
};

export default DocLayout;