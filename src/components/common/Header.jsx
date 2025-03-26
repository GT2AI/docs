// src/components/common/Header.jsx
import React, { useContext } from 'react';
import { 
  Box, 
  Container, 
  Flex, 
  HStack, 
  IconButton, 
  Text, 
  Badge, 
  useColorMode, 
  Link,
  Button
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import { SidebarContext } from '../../contexts/SidebarContext';
// ...


const Header = () => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  
  // Check if we're on a documentation page
  const isDocsPage = location.pathname.includes('/docs');
  
  return (
    <Box 
      as="header" 
      position="sticky"
      top="0" 
      zIndex="sticky"
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      boxShadow="sm"
      transition="all 0.2s"
      borderBottom="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
    >
      <Container 
        maxW="container.xl" 
        py={3}
      >
        <Flex justify="space-between" align="center">
          {/* Left Side: Logo and sidebar toggle */}
          <HStack spacing={4}>
            {isDocsPage && (
              <IconButton
                aria-label="Toggle sidebar"
                icon={<FiMenu />}
                variant="ghost"
                onClick={toggleSidebar}
                display={{ base: 'flex', md: 'none' }}
              />
            )}
            
            <RouterLink to="/">
              <HStack spacing={2} align="center">
                <Text 
                  fontFamily="heading" 
                  fontWeight="bold" 
                  fontSize="2xl"
                >
                  GT<sup>AI</sup> <Text as="span" fontSize="lg">Docs</Text>
                </Text>
                <Badge 
                  fontSize="xs" 
                  colorScheme="brand" 
                  variant="outline" 
                  rounded="full"
                >
                  Beta
                </Badge>
              </HStack>
            </RouterLink>
          </HStack>
          
          {/* Center: Search (only on docs pages) */}
          {isDocsPage && (
            <Box display={{ base: 'none', md: 'block' }} flex="1" maxW="400px" mx={4}>
              <SearchBar />
            </Box>
          )}
          
          {/* Right Side: Actions */}
          <HStack spacing={4}>
            <Link 
              href="https://github.com/GT2AI/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              display={{ base: 'none', sm: 'inline-flex' }}
            >
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                colorScheme="gray"
              />
            </Link>
            
            <ThemeToggle />

          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;