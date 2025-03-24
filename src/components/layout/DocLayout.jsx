// src/components/layout/DocLayout.jsx
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Flex, 
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/SideBar';
import { SidebarContext } from '../../contexts/SidebarContext';

const DocLayout = () => {
  const { colorMode } = useColorMode();
  const { isSidebarOpen } = useContext(SidebarContext);
  
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
          ml={{ base: 0, md: isSidebarOpen ? '280px' : '0' }}
          transition="margin-left 0.3s ease"
          bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
        >
          <Container maxW="container.lg" py={10} px={{ base: 4, md: 8 }}>
            <Outlet />
          </Container>
        </Box>
      </Flex>
      
      <Footer />
    </Box>
  );
};

export default DocLayout;